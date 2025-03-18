let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}