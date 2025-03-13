// Статьи
const articlesEl = document.querySelector(".articles__items")

const mockArticles = [
    {
        id: 1,
        img: "img/article/1.png",
        data: "05.03.2021",
        header: "Режим использования масок и перчаток на территории магазинов",
        body: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
    },

    {
        id: 2,
        img: "img/article/2.png",
        data: "05.03.2021",
        header: "Весеннее настроение для каждой",
        body: "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий."
    },

    {
        id: 3,
        img: "img/article/3.png",
        data: "22.02.2020",
        header: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
        body: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!"
    }
]

function renderArticle() {
    const articles = mockArticles

    articles.map(article => {
        const articleEl = document.createElement("li")

        articleEl.classList.add("articles__item", "article")
        articleEl.innerHTML = articleTemplate(article)

        articlesEl.appendChild(articleEl)
    })
}

function articleTemplate(article) {
return `
<div class="container">
    <div class="article__main">
        <img class="article__img" src="${article.img}" alt="Статья ${article.id}">
        <h2 class="article__data">${article.data}</h2>
        <h2 class="article__header">${article.header}</h2>
        <h2 class="article__body">${article.body}</h2>
        <button class="article__button button"
              data-tab-trigger="Подробнее">Подробнее</button>
    </div>
</div>
`
}

renderArticle()