import { celebList } from "./celebrities/celebList.js";

celebList();
import { cityData } from "./cities/cityDataProvider.js";
import { City } from "./cities/cities.js";
import { cityList } from "./cities/cityList.js";

cityList()


const allthecities = cityData()
const alltheothercities = City()

for (const place of allthecities) {
    console.log(place)
}
for (const place of alltheothercities) {
    console.log(place)
}
