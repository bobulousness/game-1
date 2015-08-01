'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var diaship;
var cursors;
var strsky;

function preload(){ 
  game.load.image('strsky','strsky.gif');
  game.load.image('diaship','diamond_ship.gif');
}

function create () {
 strsky = game.add.tileSprite(0,0,800,600,'strsky');
 diaship = game.add.sprite(20,300,'diaship');
 game.physics.enable(diaship, Phaser.Physics.ARCADE);
 cursors = game.input.keyboard.createCursorKeys();
 }

function update() {
  diaship.body.velocity.x = 0;
  diaship.body.velocity.y = 0;
  if (cursors.up.isDown) {
      diaship.body.velocity.y = -300;
    }
  else if (cursors.down.isDown) {
    diaship.body.velocity.y = 300;
    }
}

function render() {
}
  
