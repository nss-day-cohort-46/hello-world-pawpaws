export const City = (city) => {
    return `
        <div class="cityCard">
            <img src="${city.image}" />
            <p>${city.name}</p>
        </div>
    `
}