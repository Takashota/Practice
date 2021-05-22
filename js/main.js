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

function showhide() {
    // showボタン
    $('#btn_show').click(function() {
        $('#header').show();
    });
 
    // hideボタン
    $('#btn_hide').click(function() {
        $('#header').hide();
    });
};

function fadeInOut() {
    // fadeInボタン
    $('#btn_fadeIn').click(function() {
        $('#header_fadeInOut').fadeIn();
    });
 
    // fadeOutボタン
    $('#btn_fadeOut').click(function() {
        $('#header_fadeInOut').fadeOut();
    });
};

