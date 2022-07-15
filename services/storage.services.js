import {homedir} from "os"
import { join } from "path";
import { promises } from "fs";
import { getExternalIp, getGeolocation, getWeather } from "./api.services.js";
import { outputSuccess } from "./outputLog.services.js";





export const dataPath = join(homedir(), "weatherData.json")

const saveKeyValue = async (key, value) => {
    let data = {};
    if(await isExist(dataPath)){
         data = await getData(dataPath)
    }
    data[key] = value
    await promises.writeFile(dataPath, JSON.stringify(data))
}

const isExist = async (path) => {
   try {
        await promises.stat(path)
        return true;
   } catch (error) {
        return false
   }
}


const getKeyValue = async (pathkey) => {
    const data =  await getData(path)
    return data[pathkey]
}


const getData = async (path) => {
    const file = await promises.readFile(path)
    return JSON.parse(file)
} 


export const initialValues = async () => {
    if(await isExist(dataPath)){
        return
    }
    let initialData = {}
    initialData.myIp = await getExternalIp()
    const {response, latitude, longitude, ...geo} = await getGeolocation(initialData.myIp)
    initialData.geo = await {...geo, latitude, longitude}
    initialData.weather = await getWeather(latitude, longitude, process.env.WEATHER_API)
    await promises.writeFile(dataPath, JSON.stringify({...initialData})).then(()=> outputSuccess(`Город по умолчанию: ${initialData.geo.city_name}`))
}


export {saveKeyValue}