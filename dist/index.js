"use strict";
const container = document.querySelector(".container");
const button = document.getElementById("btn");
const queue = [];
container.addEventListener("click", function (event) {
    // console.log(this, event.target);
    const element = event.target;
    if (element.matches(".box")) {
        element.classList.add("clicked");
        queue.push(element);
    }
});
function dequeue() {
    console.log(queue, queue.length);
    for (let i = 0; i < queue.length; i++) {
        console.log(queue);
        const element = queue.shift();
        element.classList.remove("clicked");
        // setTimeout(() => {
        //     return;
        // }, 1000);
    }
}
button.addEventListener("click", dequeue);
