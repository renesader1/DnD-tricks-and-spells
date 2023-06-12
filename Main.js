async function GetLista(){
    const Lista = await fetch("https://raw.githubusercontent.com/renesader1/DnD-tricks-and-spells/main/Lista.json")
    let ListaConvertida = await Lista.json() 
    //AcessaLista(ListaConvertida)

    return ListaConvertida
}
 
function AcessaLista(lista){
    lista.forEach(e => {
        console.log(e)
    });
}

console.log(GetLista())