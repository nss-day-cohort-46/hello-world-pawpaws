
// imports functions from repective files
import {useLandmark} from "./LandmarkDataProvider.js"
import {Landmark} from "./Landmark.js"


export const LandmarkList = () => {
    const contentElement = document.querySelector(".container");
    const landmarkArray = useLandmark()
// creates an html representation of the combined files 
    let landmarkHTMLRepresentation = "";
    for (const landmark of landmarkArray){
        landmarkHTMLRepresentation += Landmark(landmark)
    }
    // creates a container class for the representation
    contentElement.innerHTML += `
     <aritcle class="container">
     ${landmarkHTMLRepresentation}
     <article>`
}