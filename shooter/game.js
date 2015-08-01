'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var diaship;
var cursors;
var strsky;
var diabul;

function preload(){ 
  game.load.image('strsky','strsky.gif');
  game.load.image('diaship','diamond_ship.gif');
  game.load.image('diabul','diabul.gif');
}

function create () {
 strsky = game.add.tileSprite(0,0,800,600,'strsky');
 strsky.autoScroll(-500,0);
 diabul = game.add.sprite(20,300,'diabul');
 diaship = game.add.sprite(20,300,'diaship');
 game.physics.enable(diaship, Phaser.Physics.ARCADE);
 cursors = game.input.keyboard.createCursorKeys();
 }

function update() {
  diaship.body.velocity.x = 0;
  diaship.body.velocity.y = 0;

  diabul.x = diaship.x + 90;
  diabul.y = diaship.y + 70;

  if (cursors.up.isDown) {
      diaship.body.velocity.y = -300;
    }
  else if (cursors.down.isDown) {
    diaship.body.velocity.y = 300;
    }
}
function render() {
}
  
