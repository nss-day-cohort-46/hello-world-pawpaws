// Js file to render individual celebrities objects as HTML

export const City = (city) => {
    return `
    <section class="city__card">
        <div><img class="city__img image--card" src="${city.image}"></div>
        <div calss="city__name">${city.name}</div>
    </section>
    `
}