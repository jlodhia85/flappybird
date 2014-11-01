// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };
var score;
var x = 100;
var y = 200;

var leftKey;
var rightKey;
var upKey;
var downKey;

var scoretext;

var random


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
    game.load.image("pipe","assets/pipe.png");
    game.load.image("pipe_blue","assets/pipe_blue.png");
    game.load.image("pipe-body","assets/pipe2-body.png");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
game.stage.setBackgroundColor("#B2C477");
 game.add.text(100, 150, // coordinates
     "Escape From Krypton", // text
    { font: "60px Century Gothic", //font size and typeface
    fill: "#FF0000"} //text colour
);

    game.physics.startSystem(Phaser.Physics.ARCADE);



    //game.add.sprite(740,5, "playerImg");
    //game.add.sprite(740,350, "playerImg");
    //game.add.sprite(0,5, "playerImg");
    //game.add.sprite(0,350, "playerImg");

    game.input.onDown.add(clickHandler);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    game.add.audio("sound");
    score = 0;


    //for(var countx= 250; countx<790; countx+=150) {
        //var random = Math.floor(Math.random() * 5 + 1);
        //for (var count = 1; count <= random; count++) {
          //  game.add.image(countx, 50 * (count - 1), "pipe");
       // }


        //for (var count = random + 3; count <= 8; count++) {
           // game.add.image(countx, 50 * (count - 1), "pipe");
        //}
    //}

   player = game.add.sprite(x, y,"playerImg");
    game.physics.arcade.enable(player);
    player.anchor.setTo(0.5, 0.5);
    player.checkWorldBounds = true;
    player.body.velocity.y= -100;
    // player.body.velocity.x = 100;
    player.body.gravity.y=450;



   // leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
   // leftKey.onDown.add(moveLeft);
   // rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
   // rightKey.onDown.add(moveRight);
   // upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
   // upKey.onDown.add(moveUp);
   // downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
   // downKey.onDown.add(moveDown);

    scoretext = game.add.text(60, 10, "Score"); // coordinates

    pipes = game.add.group();
    game.time.events.loop(Phaser.Timer.SECOND, generate_pipes);





  //  for(var count = random+3; count <=8; count++)
  //  {
  //      game.add.image(0,50  * (count -1), "pipe");
  //  }

   // for (var random; random = Math.floor(Math.random() * 5) + 1) {

   // for(var countx = 1; countx <=8; countx = countx +1) {
       // for (var county = 1; county <= 16; county = county + 1) {

            //    if (random == 1) {
               //     game.add.image((countx - 1) * 50, (county - 1) * 50, "pipe_blue");
            //    }
        //    }
    //    }
 //   }


    //}



}

function clickHandler (event) {
    //alert("click!" + " " + event.x + ":" + event.y);
    game.add.sprite(event.x, event.y, "playerImg");
    game.sound.play("sound");


}

function spaceHandler () {
    //Fill in the body - play sound
    game.sound.play("sound");
    //game.add.sprite(Math.random()*740, Math.random()*350, "playerImg");
    score = score + 1;
    //alert(score);
    player.body.velocity.y= -200;

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

function scoretext() {


}

function player_jump () {

    player.body.velocity.y= -150;
}



function add_pipe_part(x,y,pipe_part) {

    var pipe=pipes.create(x,y,pipe_part);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x=-200;
}
function generate_pipes() {
    var pipe_offset = 790;
    var pipe_size = 50;
    var hole = Math.floor(Math.random() * 5 + 1);
    var i;
    for (i = 0; i < hole; i++) {

        add_pipe_part(pipe_offset, i * pipe_size, "pipe-body");
    }
    for (i = hole + 2; i < 8; i++) {
        add_pipe_part(pipe_offset, i * pipe_size, "pipe-body")
    }
}


        /*
         * This function updates the scene. It is called for every new frame.
         */
        function update() {
            game.physics.arcade.overlap(player, pipes, game_over);

        }
function game_over (){
    location.reload();
}