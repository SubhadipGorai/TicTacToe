let boxes = document.querySelectorAll(".box");
let resetButton=document.querySelector("#resetButton");
let winner=document.querySelector(".winner");
let newGame=document.querySelector("#newGame");
let winnerMesg=document.querySelector("#winnerMesg");
let startGame=document.querySelector(".startGame");
let exitButton=document.querySelector("#exitButton");
let turn=true;
var X,O;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [1,4,7],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn===true){
            box.innerText="X";
            turn=false;
            box.disabled=true;
        }
        else{
            box.innerText="O";
            turn=true;
            box.disabled=true;
        }
        checkWinner();
    })
})

let checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=='' && pos2Val!=='' && pos3Val!==''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("You are the WInner");
                boxes.forEach((box)=>{
                    box.disabled=true;
                    if(pos1Val==='X'){
                        winnerMesg.innerText=`${X} is the Winner`;
                        }
                        else{
                            winnerMesg.innerText=`${O} is the Winner`;
                        }
                    winner.classList.remove("hide");
                })
            }
        }
    }
}

resetButton.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        turn=true;
        box.disabled=false;
    })
})

newGame.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        turn=true;
        box.disabled=false;
        winner.classList.add("hide");
    })
    X=prompt("Enter First Player Name:");
    O=prompt("Enter Second Player Name:");
})

startGame.addEventListener("click",()=>{
    startGame.setAttribute("class","hide");
    X=prompt("Enter First Player Name:");
    O=prompt("Enter Second Player Name:");
})

exitButton.addEventListener("click", ()=>{
    startGame.setAttribute("class","startGame");
    winner.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText='';
        turn=true;
        box.disabled=false;
    })
})
