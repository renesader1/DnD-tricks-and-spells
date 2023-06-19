secaoCards = document.querySelector("#cards-magias")

async function GetLista(){
    const Lista = await fetch("https://raw.githubusercontent.com/renesader1/DnD-tricks-and-spells/main/Lista.json")
    const ListaConvertida = await Lista.json() 
    try{
        ExibeLista(ListaConvertida)
    }
    catch{
        console.log("erro")
    }
}
 
function ExibeLista(lista){
    lista.forEach(element => {
        secaoCards.innerHTML += `<div class="card">
        <div class="container-esquerda">
            <div class="container-nome-escola-nivel">
                <h2 class="nome-magia">${element.name}</h2>
                <p class="escola-magia">${element.school}</p>
                <p class="nivel-magia">${element.level}</p>
            </div>

            <div class="container-descricao">
                <p class="descricao-magia">${element.description
                
                }</p>
            </div>

            <div class="container-duracao-acao-range">
                <div class="duracao-magia">
                    <img src="./assets/Duração.svg" alt="simbolo da duraçao da magia" class="imagem-duracao-magia">
                    <p class="texto-duracao-magia">${element.duration}</p>
                </div> 
                <div class="acao-magia">
                    <img src="./assets/Ação.svg" alt="simbolo da ação da magia" class="imagem-acao-magia">
                    <p class="texto-acao-magia">${element.casting_time}</p>
                </div> 
                <div class="range-magia">
                    <img src="./assets/Range.svg" alt="simbolo do range da magia" class="imagem-range-magia">
                    <p class="texto-range-magia">${element.range}</p>
                </div> 
            </div>
        </div>
        <div class="container-direita">
            <div class="material-magia">
                <img src="./assets/Material.svg" alt="simbolo do material da magia" class="imagem-meterial">
                <p class="texto-material"></p>
            </div>
            <img src="./assets/Verbal.svg" alt="simbolo do componente verbal" class="imagem-verbal">
            <img src="./assets/Somático.svg" alt="simbolo do componente somático" class="imagem-somatico">
        </div>
    </div>`  
});
}

GetLista()