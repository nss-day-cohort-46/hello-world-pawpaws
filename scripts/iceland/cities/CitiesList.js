
import { City } from './Cities.js'
import { useCities } from './CitiesDataProvider.js'

export const CitiesList = () => {

    const cityElement = document.querySelector(".icelandList")
    const cities = useCities()

    let cityHTMLRepresentations = ""
    for (const city of cities) {
        cityHTMLRepresentations += City(city)
       }
        
    cityElement.innerHTML += `
    <article class="icelandList_cities">
       ${cityHTMLRepresentations}
    </article>
    `
}