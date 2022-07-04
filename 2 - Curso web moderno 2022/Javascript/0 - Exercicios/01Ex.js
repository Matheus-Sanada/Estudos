function calcResult (param1, param2) {

    const sum = param1 + param2;
    const multiplier = param1 * param2;
    const division = param1 / param2;
    const subtraction = param1 - param2;


    let result = (`O resultado da suas conatas é: soma ${sum}, multiplicação ${multiplier}, divisao ${division} e sibtração ${subtraction}`)

    console.log(result);

}

calcResult(5,10)
