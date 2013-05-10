/**
 * Sceneクラス
 * 下画面に表示されるシーンを表すクラス
 * 下画面はすべてこのクラスを継承すること
 * @class
 * @param {string} HTMLと関連づいたシーンのid
 * @param {object} イベントidとfunctionのkey-valueオブジェクト
 * イベントがタッチされたあらidに関連付けられたfunctionが実行される
 * @property {object} html 背景のdivタグの参照
 * @property {array} events イベントオブジェクトリスト
 */
var Scene = function(id, events) {
	this.html = $('#' + id);
	this.events = {};
	for(var i = 0; i < events.length; i++) {
		var event = events[i];
		this.events[event.id] = this.html.find('#' + event.id);
		this.events[event.id].on('click', event.click);
	}
};

/**
 * シーン開始時のイベント
 * 各シーン毎に任意に実装する
 * @method
 * @memberof Scene
 */
Scene.prototype.enter = function() {

};

/**
 * シーンから抜ける時のイベント
 * 各シーン毎に任意に実装する
 * @method
 * @memberof Scene
 */
Scene.prototype.leave = function() {
};

/**
 * シーンを表示する
 * @method
 * @memberof Scene
 */
Scene.prototype.show = function() {
	this.html.css('display', 'block');
};

/**
 * シーンを非表示にする
 * @method
 * @memberof Scene
 */
Scene.prototype.hide = function() {
	this.html.css('display', 'none');
};