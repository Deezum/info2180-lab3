window.onload = function(){
    var layout = document.getElementById("board").getElementsByTagName("div");
    var stat = document.getElementById("status");
    var count =0;
    var track =[];
    var wincheck = track.slice(0,3);
    for (const box of layout){
        box.className ="square";
        box.addEventListener("click", function(){
            if(track.length == 0  || count == 0){
                track.push("X");
                box.classList.add("X");
                box.textContent = "X";

                count++;
            } else if (count >0 && track[count-1] == "O"){
                track.push("X");
                box.classList.add("X");
                box.textContent = "X";

                count++;
            }else if (count >0 && track[count-1] == "X"){
                track.push("O");
                box.classList.add("O");
                box.textContent = "O";

                count++;
            }
        });
       box.addEventListener("mouseover", function(){
           box.classList.add("hover");
           
       }); 
       box.addEventListener("mouseleave",function(){
           box.classList.remove("hover");
       }); 
       
    };
    

}
