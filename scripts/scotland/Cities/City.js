
// creates and exports "card"
export const City = (city) => {
    return `
        <section class="city">
            <div><img  class="city__image image--card" src="${city.image}" /></div>
            <div class="city__name">${city.name}</div>
        </section>
    `
}