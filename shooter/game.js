'use scrict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

function preload() {
  game.stage.backgroundcolor = '#101010';
  game.load.image('diamonds_ship','diamond_ship.gif');
}

var diamonds_ship;
function create () {
 diamonds_ship = game.add.sprite(400,550,'diamonds_ship');
 }

function update() {
}

function render() {
}
  
