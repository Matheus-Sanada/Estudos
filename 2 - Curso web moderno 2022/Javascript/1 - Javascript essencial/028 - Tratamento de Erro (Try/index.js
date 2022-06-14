function tratarErroLancar(erro) {

    // A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.

    throw new Error("........")
    
}


function printName(obj) {

    try {
        // As declarações try...catch marcam um bloco de declarações para testar (try),  e especifica uma resposta, caso uma exceção seja lançada.

        
        console.log(obj.name.toUpperCase() + "!!!")

    } catch (e) {

        // Uma cláusula catch contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco try. Ou seja, se você quer que o bloco try tenha êxito, e caso não tenha, você quer que o controle passe para o bloco catch. Caso qualquer declaração dentro do bloco try  (ou em uma função chamada no interior do bloco try) lançar uma exceção o controle imediatamente muda para a cláusula catch. Se nenhuma exceção for lançada no bloco try a cláusula catch é ignorada. A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch porém antes das declarações seguintes ao try. Ela sempre é executada, independente se uma exceção for lançada ou capturada.


        tratarErroLancar(e)


    }
}

const obj = {

    nome: "Matheus Sanada"



}

printName(obj)