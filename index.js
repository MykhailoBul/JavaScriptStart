// Counter Program

const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

incrementbtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}

decrementbtn.onclick = function() {
    count--;
    countlabel.textContent = count;
};

resetbtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
};

