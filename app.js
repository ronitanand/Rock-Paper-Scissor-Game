const user_score=document.getElementById("user_score");
const comp_score=document.getElementById("comp_score");

let uscore=0;
let cscore=0;
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");

//rock click
rock.addEventListener("click",function(){
let cpick=Math.floor(Math.random() * 3);  
document.querySelector("#show").innerHTML="Rock"; 

if(cpick===1){
cscore=cscore+1;

document.querySelector("#cshow").innerHTML="Paper";
comp_score.innerHTML=cscore;}
else if(cpick===2){
uscore=uscore+1;

document.querySelector("#cshow").innerHTML="scissor";
user_score.innerHTML=uscore;
}
else 
document.querySelector("#cshow").innerHTML="Rock";
})

//paper click
paper.addEventListener("click",function(){
    let cpick=Math.floor(Math.random() * 3);
    document.querySelector("#show").innerHTML="Paper";
    document.querySelector("#cshow").innerHTML="Paper";   
    if(cpick===2){
    cscore=cscore+1;
    document.querySelector("#cshow").innerHTML="Scissor";
    comp_score.innerHTML=cscore;}
    else if(cpick===0){
    uscore=uscore+1;
    document.querySelector("#cshow").innerHTML="Rock";
    user_score.innerHTML=uscore;
    }
    })

//scissor click
    scissor.addEventListener("click",function(){
        let cpick=Math.floor(Math.random() * 3); 
        document.querySelector("#show").innerHTML="Scissor";  
        if(cpick===0){
        cscore=cscore+1;
        document.querySelector("#cshow").innerHTML="Rock";
        comp_score.innerHTML=cscore;}
        else if(cpick===1){
        uscore=uscore+1;
        document.querySelector("#cshow").innerHTML="Paper";
        user_score.innerHTML=uscore;
        }
        })  
        
        



