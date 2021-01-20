// celeb object js file

const celebritiesCollection = [
    {
        image: "/scripts/czech/celebrities/celebPics/220px-Gregor_Mendel_2.jpg",
        name: "Gregor Mendel"
    },
    {
        image: "/scripts/czech/celebrities/celebPics/sigmund-freud.jpg",
        name: "Sigmund Freud"
    },
    {
        image: "/scripts/czech/celebrities/celebPics/220px-Milos_Forman.jpg",
        name: "Miloš Forman"
    },
]


export const useCelebs = () => {
    return celebritiesCollection.slice()
}

