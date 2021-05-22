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
  function hide() {
    $("#header").hide();
  }
  function show() {
    $("#header").show();
  }