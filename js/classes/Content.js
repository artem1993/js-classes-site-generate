class Content {
    constructor(selector) {
        this.elem = document.querySelector(selector)
    }

    // генерим контент
    render(content) {
        this.elem.innerHTML = ""
        
        content.forEach(block => {
            // метод toHTML реализован в классах blocks.js
            this.elem.insertAdjacentHTML("beforeend", block.toHTML())
        })
    }
}
