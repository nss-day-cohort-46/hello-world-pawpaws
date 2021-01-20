// imports functions from repective files

import {useCity} from "./CityDataProvider.js"
import {City} from "./City.js"

export const CityList = () => {
    const contentElement = document.querySelector(".container");
    const cityArray = useCity()
// creates an html representation of the combined files
    let cityHTMLRepresentation = "";
    for (const city of cityArray){
        cityHTMLRepresentation += City(city)
    }
    // creates a container class for the representation
    contentElement.innerHTML += `
     <aritcle class="city_container">
     ${cityHTMLRepresentation}
     <article>`
}