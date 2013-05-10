/**
 * Gameクラス
 * ゲームに関する情報を管理するクラス
 * @class
 * @property {object} currentScene 現在表示中のシーンのjQueryObject
 * @property {array} itemList プレイヤーが所持しているアイテムのリスト
 * @property {array} switches ゲームスイッチ一覧
 * @property {object} message Message表示で使用するインスタンス
 * @property {object} variables ゲーム変数一覧
 * @property {object} scenes シーン一覧
 */
var Game = function() {
	this.itemList = [];
	this.switches = [];
	this.variables = {};
	this.message = new Message();
	this.scenes = {};
	for(var i = 0; i < config.scenes.length; i++) {
		var scene = config.scenes[i];
		this.scenes[scene.id] = new Scene(scene.id, scene.events);
	}
	this.currentScene = this.scenes[config.start];
	this.currentScene.show();
};

/**
 * シーンを変更する
 * @method
 * @memberof Game
 * @param {string} sceneId 変更先のシーンid
 */
Game.prototype.changeScene = function(sceneId) {
	this.currentScene.leave();
	this.currentScene.hide();
	this.currentScene = this.scenes[sceneId]
	this.currentScene.show();
	this.currentScene.enter();
};