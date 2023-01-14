"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.querySelector(".container");
const dequeueButton = document.getElementById("btn");
const destackButton = document.getElementById("destack");
const themeButton = document.getElementById("theme");
const queue = [];
let count = 1;
container.addEventListener("click", function (event) {
    const element = event.target;
    if (element.matches(".box") && !element.classList.contains("clicked")) {
        element.classList.add("clicked");
        const span = document.createElement("span");
        span.textContent = String(count);
        span.style.color = "#fff";
        element.appendChild(span);
        count++;
        queue.push(element);
    }
});
function dequeue(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const copy = queue.map((element) => element);
        count = 1;
        for (let i = 0; i < copy.length; i++) {
            const element = queue.shift();
            element.classList.remove("clicked");
            element.innerHTML = "";
            yield new Promise((res) => setTimeout(res, 1500));
        }
    });
}
function destack(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const copy = queue.map((element) => element);
        for (let i = copy.length; i >= 0; i--) {
            const element = queue.pop();
            element.classList.remove("clicked");
            element.innerHTML = "";
            yield new Promise((res) => setTimeout(res, 1500));
        }
    });
}
function changeTheme(event) {
    event.preventDefault();
    let currentTheme = themeButton.dataset.theme;
    const h1 = document.getElementsByTagName('h1')[0];
    if (currentTheme === "dark") {
        document.body.style.backgroundColor = "#fff";
        h1.style.color = "black";
        themeButton.dataset.theme = "light";
        themeButton.textContent = "Dark";
    }
    else {
        document.body.style.backgroundColor = "rgb(69, 59, 73)";
        h1.style.color = "#fff";
        themeButton.dataset.theme = "dark";
        themeButton.textContent = "Light";
    }
}
dequeueButton.addEventListener("click", dequeue);
destackButton.addEventListener("click", destack);
themeButton.addEventListener("click", changeTheme);
