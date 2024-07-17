//jshint maxerr: 10000

const rows=15;
const columns=15;
var snakeCoordinates=[[0,0]];
var direction="right";
var speed=300;
const decreasingFactor=0.95;
var foodCoordinates=randomEmptyPosition(snakeCoordinates, rows, columns);

/*==============================================
Game logic
==============================================*/

var board=[];
for (let i=0; i<rows; i++) {
    board.push([]);
    for (let j=0; j<columns; j++) {
        board[i].push("empty");
    }
}

var playingGame=true;
var buttonPressed="none";
var eatenFood=false;

function nextStep(){

    direction=determineDirection(direction, buttonPressed);

    let newHeadCoordinates=findNewPosition(snakeCoordinates[0], direction);
    
    if(newHeadCoordinates[0]==foodCoordinates[0]&&newHeadCoordinates[1]==foodCoordinates[1]) {
        eatenFood=true;
    }
    
    snakeCoordinates=findNewPositions(snakeCoordinates, newHeadCoordinates, eatenFood);
    
    if (eatenFood && snakeCoordinates.length<rows*columns) {
        foodCoordinates=randomEmptyPosition(snakeCoordinates, rows, columns);
        speed=Math.ceil(decreasingFactor*speed);
    }

    
    if (areValidPositions(rows, columns, snakeCoordinates)) {
        board=updateBoard (foodCoordinates, snakeCoordinates, rows, columns);
    } else {
        playingGame=false;
    }
    
    buttonPressed="none";
    eatenFood=false;
}

function findNewPosition(coordinates, direction){
    switch(direction){
        case "right": 
            return [coordinates[0], coordinates[1]+1];
        case "left":
            return [coordinates[0], coordinates[1]-1];
        case "up":
            return [coordinates[0]-1, coordinates[1]];
        case "down": 
            return [coordinates[0]+1, coordinates[1]];
        default:
            return coordinates;
    }
}

function findNewPositions(snakeCoordinates, newHeadCoordinates, eatenFood){
    //new snake coordinates are new head coordinates + if eaten food then it is all the old positions, otherwise it is all the old positions except the last one
    newSnakeCoordinates=[newHeadCoordinates];
    
    if (eatenFood) {
       for (let i=0; i<snakeCoordinates.length; i++) {
                   newSnakeCoordinates.push(snakeCoordinates[i]);
        }
    } else {
        for (let i=0; i<snakeCoordinates.length-1; i++) {
                   newSnakeCoordinates.push(snakeCoordinates[i]);
        }
    }
    return newSnakeCoordinates;
}

function areValidPositions(rows, columns, snakeCoordinates){
    if (snakeCoordinates[0][0]<=-1 || snakeCoordinates[0][0]>=rows){
        return false;
    }
    if (snakeCoordinates[0][1]<=-1 || snakeCoordinates[0][1]>=columns){
        return false;
    }
    for (let i=1; i<snakeCoordinates.length;i++){
        if (snakeCoordinates[0][0]==snakeCoordinates[i][0] && snakeCoordinates[0][1]==snakeCoordinates[i][1]) {
            return false;
        }
    }
    return true;
}

function updateBoard (foodCordinates, snakeCoordinates, rows, columns) {
    let updatedBoard=[];
    for (let i=0; i<rows; i++) {
        updatedBoard.push([]);
        for (let j=0; j<columns; j++) {
            updatedBoard[i].push("empty");
        }
    }
    
    updatedBoard[foodCordinates[0]][foodCordinates[1]]="food";
    
    for (let i=0; i<snakeCoordinates.length; i++){
        updatedBoard[snakeCoordinates[i][0]][snakeCoordinates[i][1]]="snake";
    }
    
    return updatedBoard;
}

function randomEmptyPosition (snakeCoordinates, rows, columns) {
    let emptySpaces=[];
    for (let i=0; i<rows; i++) {
        for (let j=0; j<columns; j++) {
            let empty=true;
            for (let k=0; k<snakeCoordinates.length; k++) {
                if (i==snakeCoordinates[k][0] && j==snakeCoordinates[k][1]) {
                    empty=false;
                    break;
                }
            }
            if (empty){
                emptySpaces.push([i,j]);
            }
        }
    }
    
    return emptySpaces[Math.floor(Math.random()*emptySpaces.length)];
}

//I did't feel like making up/down buttons ;)
function determineDirection(direction, buttonPressed){
    switch(buttonPressed){
        case "left": {
            switch(direction){
                case "left":
                    return "down";
                case "right":
                    return "up";
                case "up":
                    return "left";
                case "down":
                    return "left";
                default:
                    return direction;
            }
            break;
        }
        case "right": {
            switch(direction){
                case "left":
                    return "up";
                case "right":
                    return "down";
                case "up":
                    return "right";
                case "down":
                    return "right";
                default:
                    return direction;
            }
            break;
        }
        default:
            return direction;
    }
}
//==============================================

/*==============================================
Interface
==============================================*/
$(function(){
    $("#boardContainer").html("<div id='rowContainor'><div id='buttonContainorLeft'><div id='buttonLeft'></div></div>"+newGrid(rows,columns)+"<div id='buttonContainorRight'><div id='buttonRight'></div></div></div>");
    $(".snake, .food, .empty").on("state:snake", function(){
        $(this).attr("class","snake");
    });
    $(".snake, .food, .empty").on("state:food", function(){
        $(this).attr("class","food");
    });
    $(".snake, .food, .empty").on("state:empty", function(){
        $(this).attr("class","empty");
    });
    $("#buttonContainorLeft").on("click",function(){
        buttonPressed="left";
        navigator.vibrate(40);
    });
    
    $("#buttonContainorRight").on("click",function(){
        buttonPressed="right";
        navigator.vibrate(40);
    });
    
    board=updateBoard(foodCoordinates, snakeCoordinates, rows, columns);
    updateDisplay(board);
    
    //execute the stuff in setTimeout(function(){}) every speed milliseconds
    var play= function() {
        setTimeout (function(){
            if(playingGame) {
                nextStep();
                updateDisplay(board);
                $("#score").html(snakeCoordinates.length+" SNEK"+((snakeCoordinates.length==1)?"":"S"));
                play(); 
            }
         }, speed);
    }
    
    play();
});

//each cell gets an ID that's in the format e.g. 'cell_row_column'. This makes it easy to refer to a particular cell later
function newGrid (rows, columns) {
    let grid="<table id='board'>";
    for (let i=0; i<rows; i++) {
        grid+="<tr>";
        for (let j=0; j<columns; j++) {
            grid+="<td class='empty' id='cell_"+i+"_"+j+"'></td>"; 
        }
        grid+="</tr>";
    }
    grid+="</table>";
    return grid;
}

function updateDisplay(board){
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length;j++){
            $("#cell_"+i+"_"+j).trigger("state:"+board[i][j]);
        }
    }
}

//==============================================