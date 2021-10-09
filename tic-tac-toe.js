onload=function(){
    let count = 0;
    const play1='X';
    const play2='O';
    var track=[];
    let player;
    var layout=document.getElementById('board').getElementsByTagName('div');
    var message=document.getElementById('status');
    for(const box of layout){
        box.className= "square";
        box.addEventListener('click',function(){

            if(track.length == 0 || count == 0){
                track.push("X");
                box.classList.add("X");
                box.textContent = "X";

                count= count +1;
            }else if (count > 0 && track[count-1] == "O"){
                track.push("X");
                box.classList.add("X");
                box.textContent = "X";

                count= count + 1;
            }else if (count >0 && track[count-1] == "X"){
                track.push("O");
                box.classList.add("O");
                box.textContent = "O";

                count= count +1;
            }
                
                checking();


                function checking(){
                    let box0=layout[0].textContent;
                    let box1=layout[1].textContent;
                    let box2=layout[2].textContent;
                    let box3=layout[3].textContent;
                    let box4=layout[4].textContent;
                    let box5=layout[5].textContent;
                    let box6=layout[6].textContent;
                    let box7=layout[7].textContent;
                    let box8=layout[8].textContent;
                    
                    if (box0!=='' && box0==box1 && box0==box2){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box3==box4 && box3==box5 && box3!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box6==box7 && box6==box8 && box6!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box0==box4 && box0==box8 && box4!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box2==box4 && box2==box6 && box2!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box0==box3 && box0==box6 && box0!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box1==box4 && box1==box7 && box7!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    if(box2==box5 && box2==box8 && box2!==''){
                        message.textContent="Congratulations! "+track[track.length-1]+" is the Winner!";
                        message.classList.add("you-won");
                    }
                    
                }
            
            

        },{once:true});
        box.addEventListener("mouseover", function(){
            box.classList.add("hover");
            
        }); 
        box.addEventListener("mouseleave",function(){
            box.classList.remove("hover");
        }); 
    } 
 
    document.querySelector('button').addEventListener('click',function(){
        location.reload();
    })

}



 
 