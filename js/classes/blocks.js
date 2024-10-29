// чтобы не писать каждый раз поля объектов (они одинаковые)
// объявим общий класс с этими полями
// на основе которого будем создавать другие классы
// на основе которых будем создавать шаблоны блоков
class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    // если в каком то классе не определим этот метод будет ошибка
    // это делается для того чтобы в каждом классе реализовать этот метод
    // в нем реализуем шаблоны для каждого блока
    toHTML() {
        throw new Error("Метод toHTML должен быть реализован")
    }
}

class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        // декомпозируем options из модели
        const {tag = "h1", styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles, imageStyles, alt = ""} = this.options
        return row(`<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}">`, css(styles))
    }
}

class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles} = this.options
        const column = this.value.map(col).join("")
        return row(column, css(styles))
    }
}

class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles} = this.options
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}
