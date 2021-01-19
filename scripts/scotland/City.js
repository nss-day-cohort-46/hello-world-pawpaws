export const City = (city) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="${city.image}" /></div>
            <div class="fish__name">${city.name}</div>
        </section>
    `
}