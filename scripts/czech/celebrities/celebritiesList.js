// this section will combine celebs html render and object together and make a 
// home in the czech html to house the celebs

import { useCelebs } from "/scripts/czech/celebrities/CelebritiesDataProvider.js"
import { Celebs } from "/scripts/czech/celebrities/celebrities.js"

export const CelebritiesList = () => {
    // This section of code will get the reference to the <article class="element"> 
    const contentElement = document.querySelector(".czechRepublicList__citizens");
    const celebsArray = useCelebs();

    // Generate all of the HTML for all of the fish
        let celebsHTMLRepresentations = ""
        for (const celebsObj of celebsArray) {
            
            
            // Invoke celeb component function and pass the current celeb obj as an 
            // argument. Each time add the return value to the celebsHTMLRepresentation 
            // variable with +=

            celebsHTMLRepresentations += Celebs(celebsObj)
            
        }
        // add to the existing HTML in the content element
        contentElement.innerHTML += `
            <article class="celebList">
                ${celebsHTMLRepresentations}
            </article>
        `
}