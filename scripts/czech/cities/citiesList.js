// this section will combine celebs html render and object together and make a 
// home in the czech html to house the celebs

import { useCities } from "/scripts/czech/cities/CityDataProvder.js"
import { City } from "/scripts/czech/cities/cities.js"

export const CityList = () => {
    // This section of code will get the reference to the <article class="element"> 
    const contentElement = document.querySelector(".czechRepublicList__cities");
    const cityArray = useCities();

    // Generate all of the HTML for all of the fish
        let cityHTMLRepresentations = ""
        for (const cityObj of cityArray) {
            
            
            // Invoke celeb component function and pass the current celeb obj as an 
            // argument. Each time add the return value to the celebsHTMLRepresentation 
            // variable with +=

            cityHTMLRepresentations += City(cityObj)
            
        }
        // add to the existing HTML in the content element
        contentElement.innerHTML += `
            <article class="cityList">
                ${cityHTMLRepresentations}
            </article>
        `
}