let distanceYearLight = prompt("Qual a é a distancia em anos-luz:")

let listOptions = prompt("Escolha uma das opções para fazer a conversão:\n1 - Parsec (pc)\n2 - Unidade astronomica (AU)\n3 - Quilometros (Km)")

let unitDefined
let convertedDistance

switch (listOptions) {

    case "1":
        unitDefined = "Parsec"
        convertedDistance = distanceYearLight * 0.306601
        break;
    
    case "2":
        unitDefined = "Unidade astronomica"
        convertedDistance = distanceYearLight * 63241.1
        break;

    case "3":
        unitDefined = "Quilometros"
        convertedDistance = distanceYearLight * 9.5 * Math.pow(10, 12)
        break;

        default:

            unitDefined = "Unidade não identificada\n" 
            convertedDistance = "Conversão não identificada! Favor escolher uma opção!"
     
        
}

alert(`Distancia em anos-luz: ${distanceYearLight}\n ${unitDefined} ${convertedDistance} `)