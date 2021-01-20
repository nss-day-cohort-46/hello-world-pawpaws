import { cityData } from "./cityDataProvider.js";
import { City } from "./cities.js";





export const cityList = () => {
    const contentElement = document.querySelector(".moroccoList_cities")

    const cityarray = cityData()

    let cityHTMLrep = ""
    for (const cityobj of cityarray) {
        cityHTMLrep += City(cityobj)
    }

    contentElement.innerHTML += `
        <div class="moroccoCities">
        ${cityHTMLrep}
        </div>
    `
}