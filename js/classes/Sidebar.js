class Sidebar {
    constructor(selector, callback) {
        this.elem = document.querySelector(selector)
        this.update = callback
        this.init()
    }

    init() {
        this.elem.insertAdjacentHTML("afterbegin", this.template)
        this.elem.addEventListener("submit", this.add.bind(this)) // ! bind связывает контекст
    }

    // геттер используем в init(), рендерим форму
    get template() {
        // ф-ция renderForm принимает название формы, описана в utils.js,
        // можно срендерить несколько форм с помощью массива (join убирает ,)
        return [renderForm("forma1"), renderForm("formа2")].join("")
    }

    add(event) {
        event.preventDefault()
        // получаем данные из формы
        const formName = event.target.name // поле name у тега form
        const text = event.target.text.value // поле text у тега input
        const styles = event.target.styles.value // поле styles у тега input

        // добавляем блок на основе класса TextBlock, описан в blocks.js
        const newBlock = formName === "forma1" ? new TextBlock(text, {styles}) : new TitleBlock(text, {styles})

        // !! важно понять что здесь this потерял контекст из за вызова add() в init()
        // и не может выполнить ф-цию update,
        // поэтому нужно связать контекст с помощью bind (см. в init())
        this.update(newBlock)

        // чистим форму
        event.target.text.value = ""
        event.target.styles.value = ""
    }
}
