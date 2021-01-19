// celeb object js file

const celebritiesCollection = () => [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gregor_Mendel_2.jpg/220px-Gregor_Mendel_2.jpg",
        name: "Gregor Mendel"
    },
    {
        image: "https://media.npr.org/assets/img/2013/03/08/3274654-sigmund-freud-portrait_custom-74f04f5f6641adcdb203fb3a041b3916f4c5585c-s800-c85.jpg",
        name: "Sigmund Freud"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Milos_Forman.jpg/220px-Milos_Forman.jpg",
        name: "Miloš Forman"
    }
]


export const useCelebs = () => {
    return celebritiesCollection.slice()
}

{/* <div class="czechRepublicList__citizensCard">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gregor_Mendel_2.jpg/220px-Gregor_Mendel_2.jpg" alt="Gregor Mendel">
<p>Gregor Mendel</p>
</div>
<div class="czechRepublicList__citizensCard">
<img src="https://media.npr.org/assets/img/2013/03/08/3274654-sigmund-freud-portrait_custom-74f04f5f6641adcdb203fb3a041b3916f4c5585c-s800-c85.jpg" alt="Sigmund Freud">
<p>Sigmund Freud</p>
</div>
<div class="czechRepublicList__citizensCard">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Milos_Forman.jpg/220px-Milos_Forman.jpg" alt="Miloš Forman">
<p>Miloš Forman</p>
</div> */}