// генерируем строку с классом row и стилями
function row(content, styles = "") {
    return `<div class="row" style="${styles}">${content}</div>`
}

// генерируем столбец с классом col
function col(content) {
    return `<div class="col-sm">${content}</div>`
}

// генерируем строку стилей из ключей объекта styles
function css(styles = {}) {
    // если не объект а строка ничего не делаем, возвращаем строку
    if (typeof styles === "string") return styles

    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(";")
}

// форма в сайдбаре
function renderForm(name) {
    return `
		<form name="${name}">
			<h5>${name}</h5>
			<div class="form-group">
				<input class="form-control form-control-sm" name="text" placeholder="value">
			</div>
			<div class="form-group">
				<input class="form-control form-control-sm" name="styles" placeholder="styles">
			</div>
			<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
		</form>
		<hr />
	`
}
