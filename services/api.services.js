import axios from "axios"


export const getCoordinates = async (city) => {
    return await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            appid: "b6e5d1644981d1ccad49bcbe54456db9"
        }
    }).then(({data:response})=> response[0]).then(({lat, lon})=> {
        return {lat, lon}
    } )
}



export const getWeather = async (lat, lon) => {
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


export const getExternalIp = async () => {
    return await axios.get('https://api.ipify.org').then(({data}) => data )
}

export const getGeolocation = async (ip) => {
    return await axios.get('https://api.ip2location.com/v2/',{
        params: {
            ip,
            key: "XA19RDMAEO",
            package: "WS10"
        }
    }).then(({data:response}) => response)
}





