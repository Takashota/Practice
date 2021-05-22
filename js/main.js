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
    $('#div_hide').animate( { opacity: 'show',}, { duration: 2000, easing: 'swing', } )
};

function hide() { 
    // hideボタン
    $('#div_hide').animate({opacity: 0})
};

function fadeIn() {
    // fadeInボタン
    $('#div_fadeInOut').animate( { opacity: 'show',}, { duration: 2000, easing: 'swing', } )
};

function fadeOut() {
    // fadeOutボタン
    $('#div_fadeInOut').animate({opacity: 0})
};