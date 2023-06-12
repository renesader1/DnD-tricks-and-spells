async function GetLista(){
    const Lista = await fetch("https://raw.githubusercontent.com/renesader1/DnD-tricks-and-spells/main/Lista.json")
    const ListaConvertida = await Lista.json() 
    try{
        //AcessaLista(ListaConvertida)
        console.log(ListaConvertida)
    }
    catch{
        
    }
}
 
function AcessaLista(lista){
    lista.forEach(element => {
        console.log(element)
    });
}

GetLista()