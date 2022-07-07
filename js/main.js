/*$("#btn").on("click", function(){
	//jQueryを使って画面にメッセージを表示する。
	$("#tBox").val(message);
	$("#header").hide();
});
*/
function ohayou() {
	alert("Hello!");
};

function show() {
	// showボタン
	$('#div_hide').show();
};

function hide() { 
	// hideボタン
	$('#div_hide').animate({opacity: 0})
};

function fadeIn() {
	// fadeInボタン
	$('#div_fadeInOut').fadeIn();
};

function fadeOut() {
	// fadeOutボタン
	$('#div_fadeInOut').animate({opacity: 0})
};

function OpenModal(){
	console.log("OpenModal was clicked.");
};

function HomeInputButton2(){
	console.log("HomeButton2 was clicked.");
};

function HomeInputButton3(){
	console.log("HomeButton3 was clicked.");
};