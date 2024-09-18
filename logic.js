let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#st-btn"); 
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#mng-container");
let msg = document.querySelector("#msg");
let turno = true; // Player X, Player O

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

// Add event listener to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        // Prevent clicking on an already filled box
        if (box.innerText !== "") return;

        if (turno) {
            box.innerText = "o"; // Player O
            turno = false;
        } else {
            box.innerText = "x"; // Player X
            turno = true;
        }
        box.disabled = true; // Disable box after click
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                alert(`conglatulation ${pos1val}`);
            }
        }
    }
};


// Reset game
resetBtn.addEventListener("click", () => {
    // Clear the game board and re-enable all boxes
    boxes.forEach(box => {
        box.innerText = ""; // Clear text (X or O)
        box.disabled = false; // Re-enable boxes for new game
    });
    
    // Reset turn to Player X
    turno = true;
    
    // Hide the winner message container
    msgContainer.classList.add("hide");
});



