// Js file to render individual celebrities objects as HTML

export const Landmarks = (landmark) => {
    return `
    <section class="landmark__card">
        <div><img class="landmark__img image--card" src="${landmark.image}"></div>
        <div calss="landmark__name">${landmark.name}</div>
    </section>
    `
}