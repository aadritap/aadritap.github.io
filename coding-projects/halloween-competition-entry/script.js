function setPages(){

pages[0]=["This is an interactive horror themed story. You decide what happens. Have fun and happy halloween! Sorry for the lazy writing and all the clichés" ,["continue","..",1],function(){}];

pages[1]=["You're standing in front of your new house, which you shifted to just two days ago. Something seems off. You can't quite tell what though. What will you do?",["enter",2],["turn around and leave",3],["look around a bit to see what's wrong",4],function(){}];

pages[2]=["You decide to suck it up and go inside. Instantly the feeling intensifies, but you ignore it. It's probably just a lack of sleep or something, you reason. You're not a five year old that's startled by every little thing",["continue","..",5],function(){}];

pages[3]=["You wander around outside a bit but you can't muster the courage to enter your house. You decide to go to the movies with your friend Zoe instead and you have a great time. Adventure over",function(){}];
 
pages[4]=["You peep in through the window. Everything looks fine. You take a quick look around the garden. Nothing too unusual, a pot is turned over, and you set it upright but that was probably just a cat or something. What will you do?",["enter",2],["turn around and leave",3],function(){}];

pages[5]=["It's almost six pm. The sun's setting outside. It's a little chilly. What will you do?",["put on a sweater",7],["make some coffee",8],function(){}];

pages[6]=[];

pages[7]=["You open the cupboard, take out your sweater and close it quickly. Mirrors have always been scary to you, and the mirror inside was particularly bad since it was angled in a way that left it in perpetual darkness",["continue","..",10],function(){}];

pages[8]=["While you wait for the coffee maker to prepare your drink, you notice a weird smell coming from the trash bin. What do you do?",["dismiss everything, take your coffee and go upstairs to watch a movie",9],["check the bin",11],function(){}];

pages[9]=["You sit down on the couch but it feels a bit lonely. You call your friend, Zoe to ask if she can come over. She says yes. She lives about 10 minutes away. Meanwhile you check your e-mails. There's a weird one that talks about an offer from a store you've never heard of before, 'The scary Pantheon'. What will you do?",["mark as spam",27],["read more",28],function(){}];

pages[10]=["Suddenly you hear a car pulling up outside. On a normal day you would have been rational and told yourself that it's just a car but for some reason it scares you. You gather your strength and are about to open your door to investigate, just as your friend, Zoe, rings the bell. You breathe a sigh of relief. It's just her. But why didn't she tell you she was coming first. Weird",["continue","..",14],function(){}];

pages[11]=["Inside the bin there was a human hand. It looks and smells old, with dirt beneath the nails Worried, you place it in a black bag, with the intention of throwing it somewhere far away from your house. As you exit, two cops come to you and say in an urgent tone, \" you have to come with us.\" You're extremely confused. They take your bag and find the hand. \"We were tipped. An anonymous source told us we'll find the killer on this street, exiting with a black bag, where a hand of the victim will be.\" What will you do?",["still plead innocent",12],["pretend you did it",13],function(){}];

pages[12]=["You insist that you didn't do it, but they don't believe you. The evidence is right there for everyone to see after all. You're put in jail for life. Game over",function(){}];

pages[13]=["You decide to plead guilty. They look confused and exchange looks. They say that if you hand over the bag they'll leave you scot-free. You give it to them and they leave without a single word. You want to investigate further but decide not to test your luck. Instesd you call your friend Zoe over to tell her about the whole incident and to watch a movie",["continue","..",32],function(){}];

pages[14]=["Zoe starts to frantically close the windows. You start panicking and ask \"what's wrong?\" at which point she goes to another room. There's silence for several seconds, and you hear her coming back. You ask \"what's wrong?\" again, but there is no response. Tgen you feel a cool blade pressed to your neck. What will you do?",["try to reason this out",15],["defend yourself",16],["Scream for help",17],function(){}];

pages[15]=["\"Zoe. Listen to me. You need to stop. Put the knife down and we'll talk about it\" you say in a cordial tone, but you're nowhere as calm on the inside. Zoe just laughs maniacally and says \"Let's play a little game of hide and seek, shall we? I'll close my eyes and count to 10. If I don't find you in five minutes I'll let you go and you can call the cops on me. If I find you...well it's a surprise. Don't you dare try to leave the house\". She closes her eyes. 10..9..8.. Your house is fairly small. The ground floor which you're on has a kitchen. The stairs immediately open into your room but there's a bathroom.  What will you do?",["Take your chances outside",20],["go to the kitchen",19],["go upstairs",18],function(){}];

pages[16]=["Horrible idea. You try to kick her but it fails miserably. Haven't you watched enough horror movies to know that you shouldn't try to attack someone if they have a weapon and you don't? She ends up cutting your neck, and you die a slow gruesome death. Serves you right, considering your stupidity",function(){}];

pages[17]=["You try to scream but Zoe clamps your mouth shut. You resist but she whispers something in your ear. \"I know this is unbelievable, but you have to listen to me. There's a zombie apocalypse\" She guides you to the window while saying this and you look outside. A terrifying sight greets you. There are five half dead people on the street in tattered clothes and faces smeared with blood",["continue","..",31],function(){inventory="knife";}];

pages[19]=["Immediately you regret your decision. There's no where to hide in the kitchen. You shrink into a corner and make yourself as small as possible. “Ready or not, here I come” she says in a high pitched sing song voice. You hear her footsteps and squeeze your eyes shut. You wait for her to come in and find you and do god knows what. To your surprise, you hear the footsteps fade. She's passed you and gone upstairs. This is your chance. You sneak out of the kitchen and quietly, the house",["continue","..",20],function(){}];

pages[18]=["You run upstairs and into the bathroom, which was a terrible idea because there is nowhere to hide. Cursing your decision, you go back into the room and hide under the bed. \"Ready or not, here I come\" she says in a high pitched sing song voice. You hear her footsteps and pray you won't be found. She enters the bathroom and you exhale, relieved, only to have the breath stuck in your throat because, moments later, a face comes in your sight. \"Found ya\" Zoe smiled, sadistically \"come out now, will you?\" Trembling, you get up from under the bed and face her. As soon as you do that, she stabs you with the kitchen knife and starts to slowly peel the skin off your hand. And so, you slowly die, with blood dripping from every hole she caused. An agonizing death. Game over.",function(){}];

pages[20]=["Outside, there are two cars, yours and Zoe's. Zoe's car door happens to be open, so you can take it, leaving her with yours which is much slower. But considering the pshcho she's become you don't doubt that she won't have some weird possibly deadly stuff in there. You make your way over to the cars but accidentally trip over a pot making a loud noise. You hear Zoe scream in fury as she realises that you've gone outside. QUICK! Make a choice! Which car will you take?",["Yours","You take your car",21],["Zoe's","You take Zoe's car",25],function(){}];

pages[21]=["You decide to take your car. As you drive away, you look through your rearview mirror and see her following you. And...oops! It's a dead end. Will you go left or right?" ,["left","You choose to turn left",22],["right","You choose to turn right",24],function(){}]

pages[22]=["You see a police car. Your lucky day! You get out and scream for the the police officer to stop. He does. You tell him what's going on. Concerned, he lets you in his car and tells you to direct him to where Zoe is. You do, but she's nowhere to be found",["continue","10 years later..",23],function(){}];

pages[23]=["Zoe was never found. She's been declared dead, but no one actually knows. You've gone through witness relocation, and now live in a diferrent coutry under a diferrent name. You're happily married with two kids. Everyday you pray that Zoe never finds you",function(){}];

pages[24]=["...oh no. There's a fallen branch that's blocking the whole street. You get out and try to find somewhere to hide but Zoe's already seen you. She stabs you seven times in the leg, and you die a horrible, horrible death. Game over",function(){}];

pages[25]=["You decide to take her car but after a few metres the car sputters and stops. This is it, you think. You're ready to face your death. But just then a police car comes down the road, surprising both you and Zoe. You scream and when the car is coming by, you beg the police officer to let you in. He does and while driving you explain the situation. Zoe is caught and put in a mental institution. She never forgives you for going outside but hey, life over crazy-friends-who-try-to-kill-you right?",function(){}];

pages[26]=[];

pages[27]=["You mark it as spam, not wanting anything to do with such a creepy sounding place. Just then, Zoe arrives",["continue","..",32],function(){}];

pages[28]=["Intrigued, you click on it. All it says is A64. But before you have a chance to investigate, Zoe arrives",["continue","..",32],function(){inventory="offer";}];

pages[29]=[];

pages[30]=[];

pages[31]=["You're scared out of your wits. You're still figuring out what to do when all of a sudden there's a knock on the door. You try looking through the peephole but it's too dark to see. Will you open it?",["Yes","You did",33],["No","You didn't",35],function(){pg=(pg==35?35:(inventory=="knife"?33:34));
}];

pages[32]=["You switch on the tv to search for a movie when all of a sudden the screen just shows static and then the emergency channel. You could never have prepared yourself for what the emergency broadcast would say next. \"Attention, there seems to be some sort of zombie apocalypse, the streets are filled with them. Please stay calm, I repeat, please stay calm. Lock yourselves in a secure room. We can only hope for the best\" You and Zoe exchange glances and run to the window. It's true, the stret in front of you itself has about 5 of them. Just looking at them makes you shudder",["continue","..",31],function(){}];

pages[33]=["As soon as you open the door, you smell a putrid stench. It's a zombie, about 8 feet tall and much, much stronger than you. It grabs you. Luckily, Zoe had the foresight to bring a knife. She stabs it in the chest once, twice, three times before it lets you go. Phew, that was a close one. You shut the door immediately",["continue","..",35],function(){}];

pages[34]=["As soon as you open the door, you smell a putrid stench. It's a zombie, about 8 feet tall and much, much stronger than you. It grabs you. Unfortunately, you don't have  a weapon to defend yourself. Zoe manages to escape but you don't know where she went or if she survived. You never do, because right then, it rips your stomach open. Ouch.",function(){}];

pages[35]=["Your heart is racing. You and Zoe start to look for weapons when suddenly you hear a loud bang and the door shakes. There's nowhere to hide here but the stairs open directly into a bedroom which has an attached bathroom. You and Zoe start to run up when the door bursts open. You don't bother looking back. Quick! Where will you hide?",["Bathroom","You chose the bathroom",36],["Wardrobe","You chose the wardrobe",37],function(){}];

pages[36]=["You and Zoe rush into the bathroom, locking the door. You try to be as quiet as possible. They can't find you here right? Nope. You hear their footsteps echoing across the adjacent room and a loud thud as they break down your door. You and Zoe are eaten alive. Fun way to die",function(){}];

pages[37]=["You open the wardrobe amd shut it as quietly as you can. You hold your breath, afraid that any moment could be your last. To your surprise, you hear them taking down your bathroom door. You wait a few seconds, until you're sure they've all gone inside. You and Zoe sneak out and start going down the stairs and somehow manage to leave the house",["continue","..",38],function(){}];

pages[38]=["Once outside, you scan the streets for somewhere to go. Luckily there's a shop. It's called 'The Scary Pantheon'. But you've seen how little doors do to stop zombies. Will you go in?",["Yes","You go in",39],["No","You stay outside",45],function(){pg=(pg==45?45:(inventory=="offer"?39:42));
}];

pages[39]=["You enter the shop, remembering it from the e-mail. A tall man stands behind the counter. He asks you for 'the code'. Zoe gives you a confused look but you confidently reach for your phone..execpt, you don't have it. Do you remember the 'code'?", ["E32","You say E32",41],["E42","You say E42",41],["A64","You say A64",40],["A42","You say A42",41],function(){}];

pages[40]=["\"A64\", you say, nervously. The man looks up and asks you to follow him. Zoe looks unsure. You don't know yourself. What will you do?",["Follow him",44],["Leave the shop",43],function(){}];

pages[41]=["He simply shrugs and says, \"Sorry, there's nothing I can do to help you\" You don't know what 'help' he's talking about but before you can ask him, you hear the door breaking down. Again. You try to run behind the counter but there's no point. The zombies start to tear you apart. You try to fight back but there's no point. Game over.",function(){}];

pages[42]=["You enter the shop and see a tall man standing behind the counter. He asks you for 'the code'. Confused, you and Zoe exchange looks. You ask him what he's talking about. He simply shrugs",["continue","..",43],function(){}];

pages[43]=["Just then you hear a familiar noise of a door beginning to break open. You and Zoe try to run behind the counter to hide but there's no point. The zombies start to tear you apart. Game over.",function(){}];

pages[44]=["You take a leap of faith. Zoe seems to trust you. He opens a door hidden near the back of the shop and goes inside and you follos him. He locks the door. A few seconds later, you hear the familiar sound of zombies breaking down a door. The shop door. They try yours too but it seems too strong for them. You stay there the night and listen to the emergency broadcasts on your phone. You try starting conversations with the man but he onky relies with grunts or one word answers. The next morning, they declare it okay to leave. You do, thanking the man on the way out. You ans Zoe survived and you have one amazing story to tell your future families every Halloween.",function(){}];

pages[45]=["You start to walk in silence, looking for better shelter. You've come a long way. Suddenly, Zoe screams. You see a zombie coming towards you. They move a lot faster than you thought. She gives you a look and you realise that one of you has to stay to buy the other time to run away. Its doubtful that both of you will make it if you run. Zoe has planted herself and won't move. You feel the adrenaline pumping through you and your fight or flight instincts take hold of you. What will you do?",["push Zoe out of the way and try to fight it",46],["save yourself",47],function(){}];

pages[46]=["You decide to push Zoe out of the way. You attack fiercely going for its eyes but it just bats you away and focuses on Zoe. She still hasn't moved. It grabs you both. Suddenly you hear a gunshot and it falls down, dead. A police officer had shot it. You both survived, but Zoe lost a leg. At least you have one amazing story to tell!",function(){}];

pages[47]=["You begin to run away, feeling guilty. But what are the chances you could've fought it off? Suddenly you feel something grab you! You turn around to see that the zombie completely ignored Zoe. You die a painful death beginning with it tearing one of your limbs off but to be honest, you kinda deserved it",function(){}];
}