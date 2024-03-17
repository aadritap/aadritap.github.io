let input=prompt("Rows:\nColumns:\nRefresh after(in ms):\nProbability of Starting out alive:","20\n20\n100\n0.5").split("\n");

let rows=input[0];
let columns=input[1];
let speed=input[2];
let probabilityOfAlive=input[3];
let lowerBoundForLivingCell=2;
let upperBoundForLivingCell=3;
let lowerBoundForDeadCell=3;
let upperBoundForDeadCell=3;

/*==============================================
Game Logic
==============================================*/
let board=[];

function nextIteration(board){
    let updatedBoard=[];
    for (let i=0; i<board.length; i++){
        updatedBoard.push([]);
        for(let j=0; j<board.length; j++){
            updatedBoard[i].push(false);
        }
    }
    
    for (let i=0; i<rows; i++) {
        for (let j=0; j<columns; j++){
            let numberOfNeighbors=calculateNumberOfNeighbors(board, i, j);
            if (board[i][j]) {
                updatedBoard[i][j]=(numberOfNeighbors>=lowerBoundForLivingCell && numberOfNeighbors<=upperBoundForLivingCell);
            } else {
                updatedBoard[i][j]=(numberOfNeighbors>=lowerBoundForDeadCell && numberOfNeighbors<=upperBoundForDeadCell);
            }
        }
    }
    
    return updatedBoard;
}

function calculateNumberOfNeighbors(board, row, column){
    
    let neighbors=[[row-1,column-1],[row-1,column],[row-1,column+1],[row, column-1],[row, column+1],[row+1, column-1],[row+1,column],[row+1,column+1]];
    
    let numberOfNeighbors=0;
    for (neighbor of neighbors) {
        if (neighbor[0]>=0 && neighbor[0]<board.length && neighbor[1]>=0 && neighbor[1]<board[0].length) {
        
            if (board[neighbor[0]][neighbor[1]]) {
            numberOfNeighbors++;
            }
        }
    }
    return numberOfNeighbors;
}

/*==============================================
Display
==============================================*/
let playGame;

$(function(){

    let displayBoard="";
    for (let i=0; i<rows; i++){
        displayBoard+="<tr>";
        for (let j=0; j<columns; j++){
            displayBoard+="<td id='cell_"+i+"_"+j+"' class='"+((Math.random()<probabilityOfAlive)?"populated":"unpopulated")+"'></td>";
        }
        displayBoard+="</tr>";
    }
    $("#board").html(displayBoard);
    
    $(".populated, .unpopulated").on("click", function(){
        $(this).attr("class",$(this).attr("class")=="populated"?"unpopulated":"populated");
    });
    
    $("#start").on("click",function(){
        if($(this).html()=="START"){
            startGame();
            $("#start").html("STOP");
        } else {
            clearInterval(playGame);
            $("#start").html("START");
        }
    });
    
});

function startGame(){
    let iteration=1;
    board=[];
    for (let i=0; i<rows; i++) {
       board.push([]);
       for (let j=0; j<columns; j++){
            board[i].push($("#cell_"+i+"_"+j).attr("class")=="populated");
       }
    }
    
    updateBoard(board);
    playGame=setInterval(function(){
        updatedBoard=nextIteration(board);
        if(JSON.stringify(updatedBoard)==JSON.stringify(board)){
            $("#start").trigger("click");
        } else {
            board=updatedBoard;
        }
        $("#count").html("Iteration#"+iteration);
        iteration++;
        updateBoard(board);
        
    }, speed);
}

function updateBoard(board){
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++){
            $("#cell_"+i+"_"+j).attr("class", (board[i][j])?"populated":"unpopulated");
        }
    }
};

//==============================================