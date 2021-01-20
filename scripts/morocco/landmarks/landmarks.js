export const Landmark = (landmark) => {
    return `
        <div class="landmarkCard">
            <img src="${landmark.image}" />
            <p>${landmark.name}</p>
        </div>
    `
}