import { celebData } from "./celebDataProvider.js";
import { Celeb } from "./celebs.js";



export const celebList = () => {
    const contentElement = document.querySelector(".moroccoList_citizens")

    const celebarray = celebData()

    let celebHTMLrep = ""
    for (const celebObj of celebarray) {
        celebHTMLrep += Celeb(celebObj)
    }

    contentElement.innerHTML += `
        <div class="moroccoCitizens">
        ${celebHTMLrep}
        </div>
    `
}
