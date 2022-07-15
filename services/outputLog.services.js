import chalk from "chalk";
import dedent from "dedent";



const outputError = (error) => {
    return (
        console.log(dedent`-------------------
        ${chalk.bgRed("ERROR")}
        -${chalk.red(error)}
        -------------------
        `)
    )
   
}

const outputSuccess =  (success) => {
    return (
        console.log(dedent`-------------------
        ${chalk.bgGreen(" SUCCESS ")}
        -${chalk.blue(success)}
        -------------------
        `)
    )
}

const outputHelp = () => {
    return (
        console.log(dedent`-------------------
        ${chalk.bgYellow(" HELP ")}

        -t [API_KEY] - cохранение токена
        -s [CITY] - установка города 
        -h -вывод помощи
        
        -------------------
        `)
    )
}

export {outputError, outputSuccess, outputHelp}