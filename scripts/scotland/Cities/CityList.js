import {useCity} from "./CityDataProvider.js"
import {City} from "./City.js"

export const CityList = () => {
    const contentElement = document.querySelector(".container");
    const cityArray = useCity()

    let cityHTMLRepresentation = "";
    for (const city of cityArray){
        cityHTMLRepresentation += City(city)
    }
    contentElement.innerHTML += `
     <aritcle class="container">
     ${cityHTMLRepresentation}
     <article>`
}