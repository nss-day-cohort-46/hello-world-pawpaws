const citiesCollection = [
    {
        image: "/scripts/czech/cities/cityPics/Prague.webp",
        name: "Prague"
    },
    {
        image: "/scripts/czech/cities/cityPics/Brno.jpeg",
        name: "Brno"
    },
    {
        image: "/scripts/czech/cities/cityPics/ostrava.jpg",
        name: "Ostrava"
    }
];

export const useCities = () => {
    return citiesCollection.slice()
};


