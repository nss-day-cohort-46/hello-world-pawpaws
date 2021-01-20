
// imports functions from repective files
import {useCelebrity} from "./CelebritiesDataProvider.js"
import {Celebrity} from "./Celebrities.js"

export const CelebrityList = () => {
    const contentElement = document.querySelector(".container");
    const celebrityArray = useCelebrity()
// creates an html representation of the combined files
    let celebrityHTMLRepresentation = "";
    for (const celebrity of celebrityArray){
        celebrityHTMLRepresentation += Celebrity(celebrity)
    }
    // creates a container class for the representation
    contentElement.innerHTML += `
     <aritcle class="celebs_container">
     ${celebrityHTMLRepresentation}
     <article>`
}