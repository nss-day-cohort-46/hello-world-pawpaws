const peopleCollection = [
    {
        image: "https://www.slantmagazine.com/wp-content/uploads/2020/06/lists_bjork.jpg",
        name: "Bjork",
    },
    {
        image: "https://wikiofthrones.com/static/uploads/2020/04/Game-of-Thrones-The-Mountain-and-wife-reveal-they-are-expecting-a-baby-1.jpg",
        name: "Hafþór 'Thor' Júlíus Björnsson aka The Mountain",
    },
    {
        image: "https://static.stereogum.com/uploads/2013/06/sigurros-608x450.jpg",
        name: "Sigur Ros",
    }
]

export const usePeople = () => {
    return peopleCollection.slice()
}