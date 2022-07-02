#!/usr/bin/env node

import { getArgs } from "./helpers/getArgs.js"
import { outputError, outputHelp } from "./services/outputLog.services.js";
import { saveKeyValue } from "./services/storage.services.js";


const test = () => {
    const args = getArgs(process.argv)    
    saveKeyValue("токен", args.t)
    
}

test()