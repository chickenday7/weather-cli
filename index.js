#!/usr/bin/env node
import dotenv from "dotenv"
import  getArgs  from "./helpers/getArgs.js"
import { getExternalIp } from "./services/api.services.js"
import { outputError, outputHelp, outputSuccess } from "./services/outputLog.services.js"
import { initialValues, saveKeyValue } from "./services/storage.services.js"

initApp()
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


const initApp = async () => {
    dotenv.config()
    initialValues()
   
    const args = getArgs(process.argv)    

    if(args.h){
        outputHelp()
        return
    }
    if(args.t){
        saveToken(args.t)
        return
    }
    if(args.s){

    }

    return;
    
}

