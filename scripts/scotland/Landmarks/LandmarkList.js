import {useLandmark} from "./LandmarkDataProvider.js"
import {Landmark} from "./Landmark.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".container");
    const landmarkArray = useLandmark()

    let landmarkHTMLRepresentation = "";
    for (const landmark of landmarkArray){
        landmarkHTMLRepresentation += Landmark(landmark)
    }
    contentElement.innerHTML += `
     <aritcle class="container">
     ${landmarkHTMLRepresentation}
     <article>`
}