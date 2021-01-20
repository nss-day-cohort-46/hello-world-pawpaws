// creates and exports "card"
export const Celebrity = (celebrity) => {
    return `
        <section class="celebrity">
            <div><img  class="celebrity__image image--card" src="${celebrity.image}" /></div>
            <div class="celebrity__name">${celebrity.name}</div>
            
        </section>
    `
}