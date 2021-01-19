
export const Landmark = (landmark) => {
    return `
    <div class="icelandList__landmarksCard">
        <img src="${landmark.image}>
        <p>${landmark.name}</p>
    </div>`
}