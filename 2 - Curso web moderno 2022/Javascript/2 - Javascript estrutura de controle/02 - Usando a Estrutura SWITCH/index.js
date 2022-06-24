
let validation = 1
const options = () => {

    alert("Seja bem-vindo(a)")
    let optionsUser = prompt("Escolha uma opção: \n\n1 - Mostrar meses do ano ")

    switch (optionsUser) {

        case "1":

        let mouth = prompt("Selecione o mes desejado por numero: ")


        switch (mouth) {

            case "1":

                alert("Janeiro")
                    
                    break;
                case "2":
        
                    alert("Fevereiro")
                    
                    break;
                case "3":
        
                    alert("Março")
                    
                    break;
                case "4":
        
                    alert("Abril")
                    
                    break;
                case "5":
        
                    alert("Maio")
                    
                    break;
                case "6":
        
                    alert("Junho")
                    
                    break;
                case "7":
        
                    alert("Julho")
                    
                    break;
            
                default:

                alert("Favor escolher um mes de 1 a 6!!!")
                    break;
            
        }

        default:
            break;
    }



}

options ()





