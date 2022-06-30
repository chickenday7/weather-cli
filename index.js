#!/usr/bin/env node

import { getArgs } from "./helpers/getArgs.js"
import { outputError, outputHelp } from "./services/outputLog.services.js";


const test = () => {
    const args = getArgs(process.argv)    

       outputHelp()
}

test()