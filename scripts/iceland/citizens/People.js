
export const Person = (person) => {
    return `
    <div class="icelandList__citizensCard">
        <img src="${person.image}">
        <p>${person.name}</p>
    </div>`
}