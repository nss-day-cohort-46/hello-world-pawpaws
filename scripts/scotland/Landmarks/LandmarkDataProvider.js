const fishCollection = [
    {
        image: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Bart",
        species: "birdfish",
        length: 3,
        location: "in the water",
        food: "crustaceans"
    },]

    console.log()
    export const useFish = () => {
        return fishCollection.slice()
    }
    
    
    
    
    
    
    export const mostHolyFish = () => {
        // 3, 6, 9, 12, etc... fish
        const holyFish = []
    
        for ( const fishObject of fishCollection) {
         if(fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }