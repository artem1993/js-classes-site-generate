const text = `Крутые видео и уроки по JavaScript тут <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>`

export const model = [
    new TitleBlock("Конструктор сайтов на чистом JS", {
        tag: "h2",
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: "#ffffff",
            "text-align": "center",
            padding: "1.5rem",
        },
    }),
    new TextBlock(text, {
        styles: {
            background: "linear-gradient(to left, #f2994a, #f2c94c)",
            padding: "1rem",
            "font-weight": "bold",
        },
    }),
    new ColumnsBlock(
        [
            "Приложение на чистом JavaScript, без использования библиотек",
            "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
            "JavaScript - это просто, интересно. Научись создавать любые UI своими руками",
        ],
        {
            styles: {
                background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
                padding: "2rem",
                color: "#ffffff",
                "font-weight": "bold",
            },
        }
    ),
    new ImageBlock("./img/image.jpg", {
        styles: {
            padding: "2rem 0",
            display: "flex",
            "justify-content": "center",
        },
        imageStyles: {
            width: "500px",
            height: "auto",
        },
        alt: "Это картинка",
    }),
]
