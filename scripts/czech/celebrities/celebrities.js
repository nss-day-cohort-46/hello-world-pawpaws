// Js file to render individual celebrities objects as HTML

export const Celebs = (celebs) => {
    return `
    <section class="celeb__card">
        <div class="celeb__img image--card" src="${celebs.image}"></div>
        <div calss="celeb__name">${celebs.name}</div>
    </section>
    `
}