export const Celeb = (celeb) => {
    return `
        <div class="citizensCard">
            <img src="${celeb.image}" />
            <p>${celeb.name}</p>
        </div>
    `
}