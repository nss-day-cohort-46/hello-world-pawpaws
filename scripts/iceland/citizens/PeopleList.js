import { Person } from './People.js'
import { usePeople } from './PeopleDataProvider.js'


export const PeopleList = () => {

    const peopleElement = document.querySelector(".icelandList")
    const persons = usePeople()

    let peopleHTMLRepresentations = ""
    for (const person of persons) {
        peopleHTMLRepresentations += Person(person)
       }
        
    peopleElement.innerHTML += `
    <article class="icelandList_citizens">
       ${peopleHTMLRepresentations}
    </article>
    `
}
