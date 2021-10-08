window.onload = function(){
    var layout = document.getElementById("board").getElementsByTagName("div");
    for (const box of layout){
        box.className ="square";
    };
}
