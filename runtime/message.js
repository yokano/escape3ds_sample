/**
 * メッセージクラス
 * @class
 * @property {object} div メッセージウィンドウへの参照
 * @property {object} prompt 続きを読むときに表示されるAボタンのアイコン
 * @property {object} downer 下画面の参照。タッチして続きを読ませる。
 */
var Message = function() {
	this.div = $('#message');
	this.prompt = $('#prompt');
	this.downer = $('#downer');
};

/**
 * 表示中のメッセージを消去する
 * ページの途中でも強制的に消す
 * @method
 * @memberof Message
 */
Message.prototype.clear = function() {
	this.div.empty();
	if(this.reading) {
		this.finishReading();
	}
}

/**
 * メッセージを表示する
 * @method
 * @memberof Message
 * @param {string / array} メッセージを表示する
 * 単一の文字列が渡されたらそのまま表示する。
 * 複数の文字列の配列が渡されたら1ページごとに文字列を表示する。
 * 最後まで文字送りしないと他のオブジェクトを調べることはできない。
 * Aボタンか画面タップでページ送りができる。
 */
Message.prototype.text = function(text) {
	if(typeof text == 'object' && text.length > 1) {
		this.startReading(text);
	} else {
		this.div.html(text);
	}
}

/**
 * ページ送りもモードを開始する
 * @method
 * @memberof Message
 */
Message.prototype.startReading = function(pages) {
	this.current = 0;
	this.pages = pages;
	this.reading = true;
	var self = this;
	this.scene.on('click', function() {
		self.next();
	});
	this.prompt.show();
	this.text(pages[0]);
}

/**
 * ページ送りモードを終了する
 * @method
 * @memberof Message
 */
Message.prototype.finishReading = function() {
	this.reading = false;
	this.prompt.hide();
	this.downer.off('click');
}

/**
 * 次のページへ
 * @method
 * @memberof Message
 */
Message.prototype.next = function() {
	if(this.reading) {
		this.current++;
		this.text(this.pages[this.current]);
		if(this.current >= this.pages.length - 1) {
			this.finishReading();
		}
	}
}
