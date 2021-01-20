import { landmarkData } from "./landmarkDataProvider.js";
import { Landmark } from "./landmarks.js";



export const landmarkList = () => {
    const contentElement = document.querySelector(".moroccoList_landmarks")

    const landmarkArray = landmarkData()

    let landmarkHTMLrep = ""
    for (const landmarkObj of landmarkArray) {
        landmarkHTMLrep += Landmark(landmarkObj)
    }

    contentElement.innerHTML += `
        <div class="moroccoLandmarks">
        ${landmarkHTMLrep}
        </div>
    `
}