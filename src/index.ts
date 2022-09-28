const container = document.querySelector(".container") as HTMLElement;
const button = document.getElementById("btn") as HTMLButtonElement;

const queue: HTMLElement[] = [];

container.addEventListener(
    "click",
    function (this: HTMLElement, event: MouseEvent) {
        const element = event.target as HTMLElement;
        if (element.matches(".box")) {
            element.classList.add("clicked");
            queue.push(element);
        }
    }
);

async function dequeue(): Promise<void> {
    const copy: HTMLElement[] = queue.map((element) => element);
    for (let i = 0; i < copy.length; i++) {
        const element = queue.shift() as HTMLElement;
        element.classList.remove("clicked");
        await new Promise((res) => {
            setTimeout(res, 1000);
        });
    }
}

button.addEventListener("click", dequeue);
