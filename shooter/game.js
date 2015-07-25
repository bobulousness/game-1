'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

function preload() {
  game.stage.backgroundcolor = '#101010';
  game.load.image('diamonds_ship','diamond_ship.gif');
}

var diamonds_ship;
var cursors;

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
  
