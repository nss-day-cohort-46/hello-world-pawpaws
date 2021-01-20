
const citiesCollection = [
    {
        image: "https://img.theculturetrip.com/840x440/smart//wp-content/uploads/2017/09/shutterstock_640338985.jpg",
        name: "Reykjavic",
    },
    {
        image: "https://www.cruiseiceland.com/wp-content/uploads/2016/06/Sey%C3%B0isfj%C3%B6r%C3%B0ur-Medium.jpg",
        name: "Seyðisfjörður",
    },
    {
        image: "https://i.pinimg.com/originals/3a/62/85/3a6285e1a5f1a96b53cf6b53b4043e5e.jpg",
        name: "Vik",
    }
]

export const useCities = () => {
    return citiesCollection.slice()
}