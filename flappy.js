// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };
var score;
var x = 100;
var y = 200;

var leftKey;
var rightKey;
var upKey;
var downKey;


// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("playerImg", "assets/flappy_superman.png");
    game.load.image("playerImg2","assets/JamesBond.gif");
    game.load.audio("sound","assets/point.ogg");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
game.stage.setBackgroundColor("#B2C477");
 game.add.text(75, 150, // coordinates
     "Welcome to my game", // text
    { font: "60px Century Gothic", //font size and typeface
    fill: "#ff00ff"} //text colour
);

    game.add.sprite(740,5, "playerImg");
    game.add.sprite(740,350, "playerImg");
    game.add.sprite(0,5, "playerImg");
    game.add.sprite(0,350, "playerImg");

    game.input.onDown.add(clickHandler);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    game.add.audio("sound");
    score = 0;

   player = game.add.sprite(x, y,"playerImg");


    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    leftKey.onDown.add(moveLeft);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightKey.onDown.add(moveRight);
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(moveUp);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downKey.onDown.add(moveDown);


}

function clickHandler (event) {
    //alert("click!" + " " + event.x + ":" + event.y);
    game.add.sprite(event.x, event.y, "playerImg");
    game.sound.play("sound");


}

function spaceHandler () {
    //Fill in the body - play sound
    game.sound.play("sound");
    game.add.sprite(Math.random()*740, Math.random()*350, "playerImg");
    score = score + 1;
    alert(score);

}

function moveLeft () {

    player.x = player.x - 10;

}


function moveRight() {

    player.x = player.x + 10;

}

function moveUp() {

   player.y = player.y - 10;

}

function moveDown() {

    player.y = player.y + 10;
}



/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}