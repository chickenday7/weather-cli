#!/usr/bin/env node

import  getArgs  from "./helpers/getArgs.js"
import { getWeather } from "./services/api.services.js"
import { outputError, outputHelp, outputSuccess } from "./services/outputLog.services.js"
import { saveKeyValue } from "./services/storage.services.js"

const saveToken = async (token) => {
    if(typeof token !== "string" ){
        outputError("Токен не был введен")
        return;
    }
     try{
        saveKeyValue("token", token)
        outputSuccess(`Токен ${token} успешно сохранен`)
    }catch(error){
        outputError(error)
    }
}


const test = async () => {
    const args = getArgs(process.argv)    

    // if(args.h){
    //     outputHelp()
    // }
    // if(args.t){
    //     saveToken(args.t)
    // }
    // if(args.s){

    // }
    const data = await getWeather("moscow")

    
    return;
 
}

test()