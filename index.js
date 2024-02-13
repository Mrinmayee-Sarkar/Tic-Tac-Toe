"use strict";

let box= document.querySelectorAll("#btn");
let playerO=true
let disabled=false

box.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (playerO==true){
            item.innerText="O"
            item.disabled=true
            playerO=false
            
          
        }
        else{
            item.innerText="X"
            playerO=true
            item.disabled=true
          }

        winName()

    })

})


let winner=document.querySelector(".winner")
let newGame=document.querySelector(".newGame")
let winPat=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]


const winName=()=>{

winPat.map((item)=>{

   let val1= box[item[0]].innerText
   let val2= box[item[1]].innerText
   let val3= box[item[2]].innerText

   if (val1!="" && val2!="" && val3!="" ){
    if (val1 === val2 && val2 === val3) {
      showWinner(val1)
      
    }
    
   }
   
}
)
}

const showWinner=(val)=>{
    winner.innerText=`${val} is the winner`
    winner.removeAttribute("id")
    newGame.removeAttribute("id")
}

let reset=document.querySelector(".reset")
box.forEach((item)=>{
reset.addEventListener("click",()=>{
    item.innerText=" "
    item.disabled=false

})

})


box.forEach((item)=>{
newGame.addEventListener("click",()=>{
    item.innerText=" "
    item.disabled=false
    winner.setAttribute("id","winner")
    newGame.setAttribute("id","newBtn")
})

})
