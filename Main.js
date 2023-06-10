

async function GetLista(){
    Lista = await fetch("https://github.com/renesader1/DnD-tricks-and-spells/blob/main/Lista.jsonc")

    ListaConvertida = await Lista.json()

    return ListaConvertida
}

console.log(GetLista())