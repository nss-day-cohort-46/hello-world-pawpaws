
import { Landmark } from './Landmarks.js'
import { useLandmarks } from './LandmarksDataProvider.js'

export const LandmarksList = () => {

    const landmarkElement = document.querySelector(".icelandList")
    const landmarks = useLandmarks()

    let landmarkHTMLRepresentations = ""
    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += Landmark(landmark)
       }
        
    landmarkElement.innerHTML += `
    <article class="icelandList_landmarks">
       ${landmarkHTMLRepresentations}
    </article>
    `
}