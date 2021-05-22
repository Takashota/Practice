/*$("#btn").on("click", function(){
    //jQueryを使って画面にメッセージを表示する。
    $("#tBox").val(message);
    $("#header").hide();
});
*/
function click() {
    document.getElementById("text-button").onclick = function() {
        document.getElementById("text").innerHTML = "クリックされた！";
        $("#header").hide();
    };
}

function ohayou() {
    alert("Hello!");
}

function show() {
    // showボタン
    $('#btn_header').show();
};

function hide() { 
    // hideボタン
    $('#btn_header').animate({opacity: 0})
};

function fadeIn() {
    // fadeInボタン
    $('#btn_header_fadeInOut').fadeIn();    
};

function fadeOut() {
    // fadeOutボタン
    $('#btn_header_fadeInOut').animate({opacity: 0})
};