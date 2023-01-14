const container = document.querySelector(".container") as HTMLElement;
const dequeueButton = document.getElementById("btn") as HTMLButtonElement;
const destackButton = document.getElementById("destack") as HTMLButtonElement;

const queue: HTMLElement[] = [];
let count: number = 1;

container.addEventListener("click", function (this: HTMLElement, event: MouseEvent) {
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

async function dequeue(event:Event): Promise<void> {
    event.preventDefault();
    const copy: HTMLElement[] = queue.map((element) => element);
    count = 1;
    for (let i = 0; i < copy.length; i++) {
        const element = queue.shift() as HTMLElement;
        element.classList.remove("clicked");
        element.innerHTML = "";
        await new Promise(res => setTimeout(res, 1000));
    }
}

async function destack(event:Event): Promise<void> {
    event.preventDefault();
    const copy: HTMLElement[] = queue.map((element) => element);
    for(let i = copy.length; i >= 0; i--) {
        const element = queue.pop() as HTMLElement;
        element.classList.remove("clicked");
        element.innerHTML = "";
        await new Promise(res => setTimeout(res, 1000));
    }
}

dequeueButton.addEventListener("click", dequeue);
destackButton.addEventListener("click", destack);