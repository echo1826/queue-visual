const container = document.querySelector(".container") as HTMLElement;
const button = document.getElementById("btn") as HTMLButtonElement;

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
            element.appendChild(span);
            count++;
            queue.push(element);
        }
    }
);

async function dequeue(): Promise<void> {
    const copy: HTMLElement[] = queue.map((element) => element);
    count = 1;
    for (let i = 0; i < copy.length; i++) {
        const element = queue.shift() as HTMLElement;
        element.classList.remove("clicked");
        element.innerHTML = "";
        await new Promise((res) => {
            setTimeout(res, 1000);
        });
    }
}

button.addEventListener("click", dequeue);
