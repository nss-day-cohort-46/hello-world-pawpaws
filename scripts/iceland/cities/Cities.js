
export const City = (city) => {
    return `
    <div class="icelandList__citiesCard">
        <img src="${city.image}>
        <p>${city.name}</p>
    </div>`
}