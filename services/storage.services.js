import {homedir} from "os"
import { join } from "path";
import { promises } from "fs";
import { outputSuccess } from "./outputLog.services.js";


const dataPath = join(homedir(), "weatherData.json")

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

export {saveKeyValue}