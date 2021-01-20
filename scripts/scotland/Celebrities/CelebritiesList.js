import {useCelebrity} from "./CelebritiesDataProvider.js"
import {Celebrity} from "./Celebrities.js"

export const CelebrityList = () => {
    const contentElement = document.querySelector(".container");
    const celebrityArray = useCelebrity()

    let celebrityHTMLRepresentation = "";
    for (const celebrity of celebrityArray){
        celebrityHTMLRepresentation += Celebrity(celebrity)
    }
    contentElement.innerHTML += `
     <aritcle class="container">
     ${celebrityHTMLRepresentation}
     <article>`
}