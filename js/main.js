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

document.getElementById("HomeInput").onclick = function HomeInputButton(){
	console.log("HomeButton was clicked.");
};