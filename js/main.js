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
    $('#header').show();
};

function hide() { 
    // hideボタン
    $('#header').hide();
};

function fadeIn() {
    // fadeInボタン
    $('#header_fadeInOut').fadeIn();
};

function fadeOut() {
    // fadeOutボタン
    $('#header_fadeInOut').fadeOut();
};

