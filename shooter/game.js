'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var diaship;
var cursors;
var strsky;
var diabul;
var speed = 700;
var hwtcrc;
var krsqr;

function preload(){ 
  game.load.image('strsky','strsky.gif');
  game.load.image('diaship','diamond_ship.gif');
  game.load.image('diabul','diabul.gif');
  game.load.image('krsqr','kurosquare.gif');
  game.load.image('hwtcrc','howaitocircle.gif');
}

function create () {
 strsky = game.add.tileSprite(0,0,800,600,'strsky');
 strsky.autoScroll(-500,0);
 diabul = game.add.sprite(20,300,'diabul');
 diaship = game.add.sprite(20,300,'diaship');
 krsqr = game.add.sprite(600,300, 'krsqr');
 hwtcrc = game.add.sprite(600,200,'hwtcrc'); 
 game.physics.enable(krsqr, Phaser.Physics.ARCADE);
 game.physics.enable(diaship, Phaser.Physics.ARCADE);
 game.physics.enable(diabul, Phaser.Physics.ARCADE);
 game.physics.enable(hwtcrc, Phaser.Physics.ARCADE);
 cursors = game.input.keyboard.createCursorKeys();
 }

function update() {
game.physics.arcade.overlap(diabul, hwtcrc, collisionHandler, null, this);

  diaship.body.velocity.x = 0;
  diaship.body.velocity.y = 0;

  if(! diabul.shooting) {
  diabul.body.velocity.x = 0;
  diabul.body.velocity.y = 0;
  diabul.x = diaship.x + 90;
  diabul.y = diaship.y + 70;
}
  if (cursors.up.isDown) {
      diaship.body.velocity.y = -300;
      if (! diabul.shooting) {
      diabul.body.velocity.x = -300;
      }
    }
  else if (cursors.down.isDown) {
    diaship.body.velocity.y = 300;
    if (! diabul.shooting) {
    diabul.body.velocity.x = 300;
    }
    }
  else if (cursors.right.isDown) {
  diaship.body.velocity.x = speed;
  if (! diabul.shooting) {
  diabul.body.velocity.x = speed;
  }}
  else if (cursors.left.isDown) {
  diaship.body.velocity.x = -speed;
  if (! diabul.shooting) {
  diabul.body.velocity.x = speed;
}}
  if (diabul.x > 800) diabulReset();

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
  diabul.body.velocity.x = 1000;
  diabul.shooting = true;
}}
function render() {
}

function collisionHandler (diabul, hwtcrc) {
  diabulReset();
  repositionHwtcrc();
  }

function diabulReset () {
  diabul.shooting = false;
  diabul.body.velocity.x = 0
  diabul.body.velocity.y = 0
  }

function repositionHwtcrc() {
  hwtcrc.x = game.rnd.integerInRange(100,780);
  hwtcrc.y = game.rnd.integerInRange(20, 540);
  }
