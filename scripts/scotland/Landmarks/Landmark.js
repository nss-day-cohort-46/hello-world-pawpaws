
// creates and exports "card"
export const Landmark = (landmark) => {
    return `
        <section class= "landmark">
            <div><img  class="landmark__image image--card" src="${landmark.image}" /></div>
            <div class="landmark__name">${landmark.name}</div>
            
        </section>
    `
}