import { cityData } from "./cities/cityDataProvider.js";


const city = cityData()

for (const place of city) {
    console.log(place)
}