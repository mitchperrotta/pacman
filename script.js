var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//0
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],//1
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],//2
    [1,4,1,0,1,2,1,0,1,2,1,2,1,0,1,2,1,0,1,4,1],//3
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],//5
    [1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1],//7
    [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,1,0,1,0,1,1,1,2,1,1,1,1,1],//9
    [0,0,0,0,1,2,1,0,0,0,0,0,0,0,1,2,1,0,0,0,0],
    [0,0,0,0,1,2,1,0,1,1,1,1,1,0,1,2,1,0,0,0,0],//11
    [1,1,1,1,1,2,1,0,1,0,0,0,1,0,1,2,1,1,1,1,1],
    [0,0,0,0,0,2,0,0,1,0,0,0,1,0,0,2,0,0,0,0,0],//13
    [1,1,1,1,1,2,1,0,1,1,0,1,1,0,1,2,1,1,1,1,1],
    [0,0,0,0,1,2,1,0,0,0,0,0,0,0,1,2,1,0,0,0,0],//15
    [0,0,0,0,1,2,1,0,1,1,1,1,1,0,1,2,1,0,0,0,0],
    [1,1,1,1,1,2,1,0,1,1,1,1,1,0,1,2,1,1,1,1,1],//17
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],//19
    [1,4,2,2,1,2,2,2,2,2,3,2,2,2,2,2,1,2,2,4,1],
    [1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1,1],//21
    [1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],//23
    [1,2,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],//25
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//26
]

var pacman = {
    x: 20,
    y: 10,
    direction: 0
}

var ghost = [
    {
        x: 10,
        y: 10
    },
    {
        x: 5,
        y: 10
    },
    {
        x: 14,
        y: 7
    },
    {
        x: 14,
        y: 13
    }
]

var backgroundColor = "black";
var score = 0;
var lives = 3;
var timer = 0;
var powertime = 0;

function displayWorld(){
    if (lives<=0){
        score = "Final Score: " + score;
        displayScore();
    }
    else{
        var output = '';
        for (var i=0;i<world.length;i++){
            output +="\n<div class='row'>\n";
            for (var j=0;j<world[i].length;j++){
                if (world[i][j]==0){
                    output += "<div class='blank'></div>";
                }
                else if (world[i][j]==1){
                    output += "<div class='brick'></div>";
                }
                else if (world[i][j]==2){
                    output += "<div class='coin'></div>";
                }
                else if (world[i][j]==3){
                    output += "<div id='pacman'></div>";
                }
                else if (world[i][j]==4){
                    output += "<div class='cherry'></div>";
                }
            }
            output+="\n</div>";
        }
    }
    document.getElementById('world').innerHTML = output;
    document.getElementById('pacman').style.transform = "rotate("+pacman.direction*90+"deg)";
}

displayWorld();

function displayScore(){
    if (lives<=0){}
    else{
    document.getElementById('score').innerHTML = "Score: "+score;
    }
    // if (score >= 2080){
    //     world= tempWorld;
    //     console.log(tempWorld);
    //     startGame();
    // }
}

function displaylives(){
    document.getElementById('lives').innerHTML = "Lives: "+lives;
}

function displayTimer(){
    if (lives<=0){}
    else{
        timer++;
        document.getElementById('timer').innerHTML = "Time: "+timer;
    }
}

function moveGhostUp(i){
    ghost[i].x--;
    document.getElementById('ghost'+i).style.top= (ghost[i].x*20)+"px";
}
function moveGhostDown(i){
    ghost[i].x++;
    document.getElementById('ghost'+i).style.top= (ghost[i].x*20)+"px";
}
function moveGhostRight(i){
    ghost[i].y++;
    document.getElementById('ghost'+i).style.left= (ghost[i].y*20)+"px";
}
function moveGhostLeft(i){
    ghost[i].y--;
    document.getElementById('ghost'+i).style.left= (ghost[i].y*20)+"px";
}

function randomMove(i){
    var roll = Math.floor(Math.random() * 4)
    if(roll==0){//up
        if (world[ghost[i].x-1][ghost[i].y]==1){
            randomMove(i);
        }
        else{
            moveGhostUp(i);
        }
    }
    if(roll==1){//down
        if (world[ghost[i].x+1][ghost[i].y]==1){
            randomMove(i);
        }
        else{
            moveGhostDown(i);
        }
    }
    if(roll==2){//right
        if (world[ghost[i].x][ghost[i].y+1]==1 || ghost[i].y== world[ghost[i].x].length-1){
            randomMove(i);
        }
        else{
            moveGhostRight(i);
        }
    }
    if(roll==3){//left
        if (world[ghost[i].x][ghost[i].y-1]==1 || ghost[i].y==0){
            randomMove(i);
        }
        else{
            moveGhostLeft(i);
        }
    }
}


function moveGhost(){
    if (lives>0){
        for (var i=0;i<2;i++){//2 ghost follow pacman
            var move = 0;
            if(move==0 && ghost[i].x>pacman.x && world[ghost[i].x-1][ghost[i].y]!=1){//up
                moveGhostUp(i);
                move++
            }
            if(move==0 && ghost[i].x<pacman.x && world[ghost[i].x+1][ghost[i].y]!=1){//down
                moveGhostDown(i);
                move++;
            }
            if(move==0 && ghost[i].y<pacman.y && world[ghost[i].x][ghost[i].y+1]!=1){//right
                moveGhostRight(i);
                move++;
            }
            if(move==0 && ghost[i].y>pacman.y && world[ghost[i].x][ghost[i].y-1]!=1){//left
                moveGhostLeft(i);
                move++;
            }
            if(move==0){//if ghost cant follow pacman, move in random direction
                randomMove(i);
            }
        }
        for (var i=2;i<ghost.length;i++){ //2 pacman move in random directions
            randomMove(i);
        }
    }
}

function detection(){
    document.body.style.backgroundColor=backgroundColor
    if (powertime==0){
        backgroundColor = "black";
        for (var i=0;i<ghost.length;i++){
            if (ghost[i].x==pacman.x && ghost[i].y==pacman.y && lives>0){
                lives--;
                world[pacman['x']][pacman['y']] = 0;
                pacman['y'] = 10;
                pacman['x'] =20;
                world[20][10] = 3;
                displayWorld();
            }
        }
    }
    else{
        powertime--
        for (var i=0;i<ghost.length;i++){
            if (ghost[i].x==pacman.x && ghost[i].y==pacman.y && lives>0){
                score+= 200;
                ghost[i].x = 13;
                ghost[i].y = 10;
                document.getElementById('ghost'+i).style.top= (ghost[i].x*20)+"px";
                document.getElementById('ghost'+i).style.left= (ghost[i].y*20)+"px";
                displayWorld();
            }
        }
    }
}

function movePacman(){
    console.log(pacman.direction);
    if (pacman.direction==0){//right
        if ((pacman['y']+2)>world[pacman['x']].length){
            world[pacman['x']][pacman['y']] = 0;
            pacman['y']= 0;
        }
        if (world[pacman['x']][pacman['y']+1]!=1){
            if (world[pacman['x']][pacman['y']+1]==2){
                score+=10;
            }
            if (world[pacman['x']][pacman['y']+1]==4){
                score+=50;
                powertime = 1500;
                backgroundColor = "red";
                console.log(backgroundColor);
            }
            world[pacman['x']][pacman['y']] = 0;
            world[pacman['x']][pacman['y']+1] = 3;
            pacman['y']++;
        }
    }
    if (pacman.direction==1){//down
        if(world[pacman['x']+1][pacman['y']]!=1){
            if (world[pacman['x']+1][pacman['y']]==2){
                score+=10;
            }
            if (world[pacman['x']+1][pacman['y']]==4){
                score+=50;
                powertime = 1500;
                backgroundColor = "red";
                console.log(backgroundColor);
            }
            world[pacman['x']][pacman['y']] = 0;
            world[pacman['x']+1][pacman['y']] = 3;
            pacman['x']++;
        }
    }
    if (pacman.direction==2){//left
        if (world[pacman['x']][pacman['y']-1]!=1){
            if ((pacman['y']-1)<0){
                world[pacman['x']][pacman['y']] = 0;
                pacman['y']= world[pacman['x']].length-1;
            }
            if (world[pacman['x']][pacman['y']-1]==2){
                score+=10;
            }
            if (world[pacman['x']][pacman['y']-1]==4){
                score+=50;
                powertime = 1500;
                backgroundColor = "red";
                console.log(backgroundColor);
            }
            world[pacman['x']][pacman['y']] = 0;
            world[pacman['x']][pacman['y']-1] = 3;
            pacman['y']--;
        }
    }
    if (pacman.direction==3){//up
        if(world[pacman['x']-1][pacman['y']]!=1){
            if (world[pacman['x']-1][pacman['y']]==2){
                score+=10;
            }
            if (world[pacman['x']-1][pacman['y']]==4){
                score+=50;
                powertime = 1500;
                backgroundColor = "red";
                console.log(backgroundColor);
            }
            world[pacman['x']][pacman['y']] = 0;
            world[pacman['x']-1][pacman['y']] = 3;
            pacman['x']--;
        }
    }
    displaylives();
    displayScore();
    displayWorld();
}

document.onkeydown = function(e){
    if(e.keyCode == 39){ //right
        if ((pacman['y']+2)>world[pacman['x']].length){
            world[pacman['x']][pacman['y']] = 0;
            pacman['y']= 0;
        }
        if (world[pacman['x']][pacman['y']+1]!=1){
            pacman['direction'] = 0;
        }
    }
    if(e.keyCode == 40){ //down
        if (world[pacman['x']+1][pacman['y']]!=1){
            pacman['direction'] = 1;
        }
    }
    if(e.keyCode == 38){ //up
        if (world[pacman['x']-1][pacman['y']]!=1){
            pacman['direction'] = 3;
        }
    }
    if(e.keyCode == 37){ //left
        if ((pacman['y']-1)<0){
            world[pacman['x']][pacman['y']] = 0;
            pacman['y']= world[pacman['x']].length-1;
        }
        if (world[pacman['x']][pacman['y']-1]!=1){
            pacman['direction'] = 2;
        }
    }
    displaylives();
    displayScore();
    displayWorld();
}

setInterval(moveGhost,300);
setInterval(movePacman,200);
setInterval(detection, 1);
setInterval(displayTimer, 1000);