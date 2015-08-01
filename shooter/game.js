'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var diamonds_ship;
var cursors;
var strsky;

function preload() 
  game.load.image('strsky', 'strsky.gif');
  game.load.image('diamonds_ship','diamond_ship.gif');
}

function create () {
 diamonds_ship = game.add.sprite(20,300,'diamonds_ship');
 game.physics.enable(diamonds_ship, Phaser.Physics.ARCADE);
 cursors = game.input.keyboard.createCursorKeys();
 }

function update() {
  diamonds_ship.body.velocity.x = 0;
  diamonds_ship.body.velocity.y = 0;
  if (cursors.up.isDown) {
      diamonds_ship.body.velocity.y = -300;
    }
  else if (cursors.down.isDown) {
    diamonds_ship.body.velocity.y = 300;
    }
}

function render() {
}
  
