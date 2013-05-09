/**
 * Sceneクラス
 * 下画面に表示されるシーンを表すクラス
 * 下画面はすべてこのクラスを継承すること
 * @class
 * @param {string} HTMLと関連づいたシーンのid
 */
var Scene = function(id) {
	this.html = $('#' + id);
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