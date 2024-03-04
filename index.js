"use strict";

let box = document.querySelectorAll(".btn");
let playerO = true;
let count=0
box.forEach((item) => {
    
    item.addEventListener("click", () => {
        count=count+1
        if (playerO) {
            item.innerText = "O";
            item.style.color="#FF5F1F"
            playerO=false
        } else {
            item.innerText = "X";
            item.style.color="#212121"
            playerO=true
        }
        item.disabled = true;

        if (checkWinner()) {
            showModal(`${item.innerText} IS THE WINNER`);
            disablebox()
            count=0
        }
        else if(count===9){
            showModal("It IS A DRAW")
        }
    });
});

let modal = document.querySelector("#myModal");
let closeModal = document.querySelector("#closeModal");
let winnerText = document.querySelector("#winnerText");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function checkWinner() {
    const winPat = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

    for (let i of winPat) {
        const val1 = box[i[0]].innerText;
        const val2 = box[i[1]].innerText;
        const val3 = box[i[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "" && val1 === val2 && val2 === val3) {
            newGame.removeAttribute("id")
            return true;
            }
            
    }

    return false;

}

function showModal(message) {
    winnerText.innerText = message;
    modal.style.display = "block";
}

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    box.forEach((item) => {
        item.innerText = " ";
        item.disabled = false;
    });
    modal.style.display = "none";
});

let newGame = document.querySelector(".newGame");

newGame.addEventListener("click", () => {
    box.forEach((item) => {
        item.innerText = " ";
        item.disabled = false;
        newGame.setAttribute("id","newBtn")
    });
    modal.style.display = "none";
});


function disablebox(){
    box.forEach((item)=>{
        item.disabled=true
    })
}