const container = document.querySelector(".container") as HTMLElement;
const button = document.getElementById("btn") as HTMLButtonElement;

const queue: HTMLElement[] = [];

container.addEventListener("click", function(this: HTMLElement, event: MouseEvent) {
    // console.log(this, event.target);
    const element = event.target as HTMLElement;
    if(element.matches(".box")) {
        element.classList.add("clicked");
        queue.push(element);
    }
});

function dequeue(): void {
    for(let i = 0; i < queue.length; i++) {
        const element = queue.shift() as HTMLElement;
        element.classList.remove("clicked");
        setTimeout(() => {}, 1000);
    }
}

button.addEventListener("click", dequeue);