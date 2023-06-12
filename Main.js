async function GetLista(){
    const Lista = await fetch("https://raw.githubusercontent.com/renesader1/DnD-tricks-and-spells/main/Lista.json")
    let ListaConvertida = await Lista.json() 
    AcessaLista(ListaConvertida)
}
 
function AcessaLista(lista){
    lista.map(e => {
        console.log(e)
    });
}

GetLista()