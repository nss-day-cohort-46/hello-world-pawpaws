// this section will combine celebs html render and object together and make a 
// home in the czech html to house the celebs

import { useLandmarks } from "/scripts/czech/landmarks/LandmarkDataProvider.js"
import { Landmarks } from "/scripts/czech/landmarks/landmarks.js"

export const landmarkList = () => {
    // This section of code will get the reference to the <article class="element"> 
    const contentElement = document.querySelector(".czechRepublicList__landmarks");
    const landmarksArray = useLandmarks();

    // Generate all of the HTML for all of the fish
        let landmarkHTMLRepresentations = ""
        for (const landmarkObj of landmarksArray) {
            
            
            // Invoke celeb component function and pass the current celeb obj as an 
            // argument. Each time add the return value to the celebsHTMLRepresentation 
            // variable with +=

            landmarkHTMLRepresentations += Landmarks(landmarkObj)
            
        }
        // add to the existing HTML in the content element
        contentElement.innerHTML += `
            <article class="landmarkList">
                ${landmarkHTMLRepresentations}
            </article>
        `
}