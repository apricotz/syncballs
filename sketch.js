var ball, database, position;

function setup(){
    createCanvas(500,500);
     database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballRef  = database.ref('ball/position');
    ballRef.on("value",  readPosition)

    // 2 main operations
    // 1st read values from database
    // 2nd  write values in database
    // database.ref()
    //.on("value", data) = read values
    // .set({x : _____ }) = write values
}

function readPosition(data){
    position = data.val();
    ball.x = position.w;
    ball.y = position.y;

}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'w' : position.w + x,
        'y' : position.y + y

    })
    }
