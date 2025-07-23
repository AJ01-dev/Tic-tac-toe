let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let turnO=true;
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let nowinner=document.querySelector(".invalid");
let msg=document.querySelector("#msg");
const winnpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let a=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box clicked");
    if(turnO){
      box.innerText="O";
      turnO=false;
      a++;
    }
    else{
        box.innerText="X";
        turnO=true;
        a++;
    }
    if(a==9){
        nowinner.classList.remove("hide");
    }
    box.disabled=true;
    checkwinner();
    });
});
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    nowinner.classList.add("hide");
}
const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (pos1val) => {
    msg.innerText = `congratulation winner is ${pos1val}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let pattern of winnpattern){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

       if(pos1val!="" && pos2val!="" && pos3val!=""){
         if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner");
            showwinner(pos1val);
         }
       }
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);