const landmarksCollection = [
    {
        image: "https://www.overseasattractions.com/wp-content/uploads/2019/03/iceland-northern-lights-tours-1.jpg",
        name: "Northern Lights",
    },
    {
        image: "https://farm3.staticflickr.com/2933/14488967547_ae1e2687cd_z.jpg",
        name: "Blue Lagoon, Grindavic",
    },
    {
        image: "https://www.iamreykjavik.com/wp-content/uploads/2019/08/prettiest-churches-iceland-hallgrimskirkja-reykjavik.jpg",
        name: "Hallgrimskirkja",
    }
]

export const useLandmarks = () => {
    return landmarksCollection.slice()
}