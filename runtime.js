$(function() {
	var bedroom = $('#bedroom');
	var passage = $('#passage');
	var toPassage = $('#to_passage');
	
	toPassage.click(function() {
		bedroom.css('display', 'none');
		passage.css('display', 'block');
	});
	
	passage.click(function() {
		passage.css('display', 'none');
		bedroom.css('display', 'block');
	});
});