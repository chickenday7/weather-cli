export const getArgs = (args) => {
    let res = {}
    let currentKey;

    const [_execute, _file, ...restArgs] = args
    restArgs.forEach(element => {
        if(element.charAt(0) === "-"){
            res[element.charAt(1)] = true
            currentKey = element.charAt(1)
        }else{
            res[currentKey] = element
        }        
    });
    return res
}