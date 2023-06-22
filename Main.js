secaoCards = document.querySelector("#cards-magias")

async function GetLista(){
    const Lista = await fetch("https://raw.githubusercontent.com/renesader1/DnD-tricks-and-spells/main/Lista.json")
    const ListaConvertida = await Lista.json() 
    try{
        
        ExibeLista(ListaConvertida)
    }
    catch(Erro){
        console.log(Erro)
    }
}
 
function ExibeLista(lista){


    lista.forEach(element => {
        console.log("passou")
        
        let material = element.componentes.material != "" ?  `<div class="material-magia">
        <img src="./assets/Material.svg" alt="simbolo do material da magia" class="imagem-meterial">
        <p class="texto-material"></p>
        </div>` : ""

        let verbal = element.componentes.verbal ? `<img src="./assets/Verbal.svg" alt="simbolo do componente verbal" class="imagem-verbal">`: "<p></p>"

        let somatico = element.componentes.somatic0 ? `<img src="./assets/Somático.svg" alt="simbolo do componente somático" class="imagem-somatico">` : "<p></p>"


        secaoCards.innerHTML += `<div class="card">
        <div class="container-esquerda">
            <div class="container-nome-escola-nivel">
                <h2 class="nome-magia">${element.nome}</h2>
                <p class="escola-magia">${element.escola}</p>
                <p class="nivel-magia">${element.nivel}</p>
            </div>

            <div class="container-descricao">
                <p class="descricao-magia">${element.descricao
                
                }</p>
            </div>

            <div class="container-duracao-acao-range">
                <div class="duracao-magia">
                    <img src="./assets/Duração.svg" alt="simbolo da duraçao da magia" class="imagem-duracao-magia">
                    <p class="texto-duracao-magia">${element.duracao}</p>
                </div> 
                <div class="acao-magia">
                    <img src="./assets/Ação.svg" alt="simbolo da ação da magia" class="imagem-acao-magia">
                    <p class="texto-acao-magia">${element.tempo_invocacao}</p>
                </div> 
                <div class="range-magia">
                    <img src="./assets/Range.svg" alt="simbolo do range da magia" class="imagem-range-magia">
                    <p class="texto-range-magia">${element.distancia}</p>
                </div> 
            </div>
        </div>
        <div class="container-direita">
            ${material}
            ${verbal}
            ${somatico}            
        </div>
    </div>`  
});
}

function FiltraListaPorClasse(lista, classe){
    return listaFiltrada = lista.filter(item => item.classe == classe)
}


GetLista()