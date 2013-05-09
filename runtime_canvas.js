/**
 * 脱出ゲームのランタイム
 * @file
 */
enchant();

// エントリポイント
var game;
$(function() {
	game = new Game();
	game.start();
});

var files = [
	'img/armoire.png',
	'img/balcony.png',
	'img/bedroom.png',
	'img/kitchen.png',
	'img/living.png',
	'img/living2.png',
	'img/lounge.png',
	'img/passage.png',
	'img/toilet.png'
];

/**
 * ゲームクラス
 */
var Game = Class.create(Core, {
	initialize: function() {
		Core.call(this, 320, 212);
		for(var i = 0; i < files.length; i++) {
			this.preload(files[i]);
		}
	},
	onload: function() {
		this.changeScene(Bedroom);
	},
	changeScene: function(scene) {
		this.popScene();
		this.pushScene(new scene());
	}
});

/**
 * 寝室
 */
var Bedroom = Class.create(Scene, {
	initialize: function() {
		Scene.call(this, game.width, game.height);
	},
	onenter: function() {
		var bk = new Sprite();
		bk.image = game.assets['img/bedroom.png'];
		bk.width = bk.image.width;
		bk.height = bk.image.height;
		bk.addEventListener('touchstart', function() {
			game.changeScene(Passage);
		});
		this.addChild(bk);
	}
});


/**
 * 廊下
 */
var Passage = Class.create(Scene, {
	initialize: function() {
		Scene.call(this, game.width, game.height);
	},
	onenter: function() {
		var bk = new Sprite();
		bk.image = game.assets['img/passage.png'];
		bk.width = bk.image.width;
		bk.height = bk.image.height;
		bk.addEventListener('touchstart', function() {
			game.changeScene(Bedroom);
		});
		this.addChild(bk);
	}
});