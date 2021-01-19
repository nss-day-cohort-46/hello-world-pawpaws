export const Celebrity = (celebrity) => {
    return `
        <section class="celebrity card">
            <div><img  class="celebrity__image image--card" src="${celebrity.image}" /></div>
            <div class="celebrity__name">${celebrity.name}</div>
            
        </section>
    `
}