

async function GetLista(){
    Lista = await fetch("https://raw.githubusercontent.com/renesader1/DnD-tricks-and-spells/main/Lista.json")

    ListaConvertida = await Lista.json()

    return ListaConvertida.
}

console.log(GetLista())