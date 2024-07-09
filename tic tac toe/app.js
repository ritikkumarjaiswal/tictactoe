let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const resetgame =()=>{
    turn0=true;
    count=0;
    enabledbox();
    msgcontainer.classList.add("hide");
 }

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        count++;
      let iswinner=checkWinner();
      if(count===9 && !iswinner){
        gamedraw();
      }
    });
    
});
 const gamedraw = () =>{
    msg.innerText="game is draw";
    msgcontainer.classList.remove("hide");
    disabledbox();
 }
const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
}

const disabledbox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enabledbox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}


const checkWinner=()=>{
    for (let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != ""&& pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                disabledbox();
                showWinner(pos1val);
            }


        }
    }
    
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);