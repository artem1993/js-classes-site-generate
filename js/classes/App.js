class App {
    constructor(model) {
        this.model = model
    }

    init() {
        // инициализация основного контента
        const content = new Content("#content")

        // метод render реализован в классе Content в Content.js
        // генерим основной контент
        content.render(this.model)

        // следим за обновлением
        const updateCallback = newBlock => {
            this.model.push(newBlock) // добавляем сгенерированный блок
            content.render(this.model)
        }

        // сайдбар
        new Sidebar("#sidebar", updateCallback)
    }
}
