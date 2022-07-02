import axios from "axios"


const getCoordinates = async (city) => {
    return await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            appid: "b6e5d1644981d1ccad49bcbe54456db9"
        }
    }).then(({data:response})=> response[0]).then(({lat, lon})=> {
        return {lat, lon}
    } )
}



const getWeather = async (city) => {
    const {lat, lon} = await getCoordinates(city)
    return await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat,
            lon,
            appid: "b6e5d1644981d1ccad49bcbe54456db9",
            units: "metric",
            lang: "ru"
        }
    }).then((response) => response.data)
}




export {getWeather}