const container = document.querySelector(".container") as HTMLElement;
const dequeueButton = document.getElementById("btn") as HTMLButtonElement;
const destackButton = document.getElementById("destack") as HTMLButtonElement;
const themeButton = document.getElementById("theme") as HTMLButtonElement;

const queue: HTMLElement[] = [];
let count: number = 1;

container.addEventListener(
    "click",
    function (this: HTMLElement, event: MouseEvent) {
        const element = event.target as HTMLElement;
        if (element.matches(".box") && !element.classList.contains("clicked")) {
            element.classList.add("clicked");
            const span = document.createElement("span") as HTMLElement;
            span.textContent = String(count);
            if (themeButton.dataset.theme === "dark") {
                span.style.color = "#fff";
            } else {
                span.style.color = "black";
            }
            element.appendChild(span);
            count++;
            queue.push(element);
        }
    }
);

async function dequeue(event: MouseEvent): Promise<void> {
    event.preventDefault();
    const copy: HTMLElement[] = queue.map((element) => element);
    count = 1;
    for (let i = 0; i < copy.length; i++) {
        const element = queue.shift() as HTMLElement;
        element.classList.remove("clicked");
        element.innerHTML = "";
        await new Promise((res) => setTimeout(res, 1500));
    }
}

async function destack(event: MouseEvent): Promise<void> {
    event.preventDefault();
    const copy: HTMLElement[] = queue.map((element) => element);
    for (let i = copy.length; i >= 0; i--) {
        const element = queue.pop() as HTMLElement;
        element.classList.remove("clicked");
        element.innerHTML = "";
        await new Promise((res) => setTimeout(res, 1500));
    }
}

function changeTheme(event: MouseEvent): void {
    event.preventDefault();
    let currentTheme = themeButton.dataset.theme;
    const h1 = document.getElementsByTagName("h1")[0] as HTMLElement;
    const spans = document.getElementsByTagName("span");
    if (currentTheme === "dark") {
        document.body.style.backgroundColor = "#fff";
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.color = "black";
        }
        h1.style.color = "black";
        themeButton.dataset.theme = "light";
        themeButton.textContent = "Dark";
    } else {
        document.body.style.backgroundColor = "rgb(69, 59, 73)";
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.color = "#fff";
        }
        h1.style.color = "#fff";
        themeButton.dataset.theme = "dark";
        themeButton.textContent = "Light";
    }
}

dequeueButton.addEventListener("click", dequeue);
destackButton.addEventListener("click", destack);
themeButton.addEventListener("click", changeTheme);
