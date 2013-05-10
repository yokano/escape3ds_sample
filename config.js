/**
 * ゲーム固有の設定ファイル
 * @property {string} title ゲームのタイトル
 * @property {string} start 開始シーンのid
 * @property {string} author ゲームの作者名
 * @property {string} scenes シーンidリスト
 */
var config = {
	title: '脱出ゲームサンプル',
	start: 'bedroom1',
	author: 'y.okano',
	scenes: [
		{
			id: 'bedroom1',
			events: [
				{
					id: 'to_passage1',
					click: function() {
						game.changeScene('passage1');
					}
				}
			]
		},
//		'armoire1',
//		'armoire2',
//		'armoire3',
//		'balcony',
//		'bedroom1',
//		'bedroom2',
//		'doorknob',
//		'kitchen',
//		'living1',
//		'living2',
//		'lounge',
		{
			id: 'passage1',
			events: [
			]
		}
//		'passage2',
//		'toilet',
//		'tv'
	]
};