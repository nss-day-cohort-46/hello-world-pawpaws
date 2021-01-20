// Js file to render individual celebrities objects as HTML

export const Celebs = (celebs) => {
    return `
    <section class="celeb__card">
        <div><img class="celeb__img image--card" src="${celebs.image}"></div>
        <div class="celeb__name">${celebs.name}</div>
    </section>
    `
}