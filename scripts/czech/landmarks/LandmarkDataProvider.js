const landmarksCollection = [
    {
        image: "/scripts/czech/landmarks/LandmarkPics/prague castle.jpeg",
        name: "Prague Castle"
    },
    {
        image: "/scripts/czech/landmarks/LandmarkPics/charlesBridge.jpeg",
        name: "Charles Bridge"
    },
    {
        image: "/scripts/czech/landmarks/LandmarkPics/oldtownsquare.jpeg",
        name: "Old Town Square"
    }
];

export const useLandmarks = () => {
    return landmarksCollection.slice()
};

const lndmrk = useLandmarks()
console.log(lndmrk)
