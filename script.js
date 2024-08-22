let boxes=document.querySelectorAll(".box");
let resetGame=document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let tieGame= document.querySelector(".tie");
let turnO=true;//player X , player O

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const reset= ()=> {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
        box.innerText="X";
        turnO=true;
        }
   box.disabled=true; 

   checkWinner();
})
    
});
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congo!,Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableboxes();
    
}
const checkWinner = ()=>{
    for(let patterns of winPattern){
        let pstn1val=boxes[patterns[0]].innerText;
        let pstn2val=boxes[patterns[1]].innerText;
        let pstn3val=boxes[patterns[2]].innerText;
        if(pstn1val !=""&& pstn2val!="" &&pstn3val!=""){
            if(pstn1val==pstn2val && pstn2val==pstn3val){
                console.log("winner",pstn1val);
                showWinner(pstn1val);
            }
            }
    }
};
newGame.addEventListener("click", reset);
reset.addEventListener("click",reset);