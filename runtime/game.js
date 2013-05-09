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
	var sceneIdList = [
		'armoire1',
		'armoire2',
		'armoire3',
		'balcony',
		'bedroom1',
		'bedroom2',
		'doorknob',
		'kitchen',
		'living1',
		'living2',
		'lounge',
		'passage1',
		'passage2',
		'toilet',
		'tv'
	];
	this.scenes = {};
	for(var i = 0; i < sceneIdList.length; i++) {
		this.scenes[sceneIdList[i]] = new Scene(sceneIdList[i]);
	}
	this.currentScene = this.scenes.bedroom1;
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

$(function() {
	var game = new Game();
});
