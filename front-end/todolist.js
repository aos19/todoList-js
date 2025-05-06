// Variáveis dos elementos da página
const botaoInsere = document.querySelector('.botao-insere');

const botaoRemove = document.querySelector('.botao-remove');

// // Declarando e construindo a função de adicionar tarefas
// function adicionarTarefa() {
//     // Resguardando a entrada do usuário numa variável
//     const item = entradaUsuario.value;

//     if(item !== '') {
//         const lista = document.createElement('li');

//         // Criando um checkbox para cada tarefa dinamicamente
//         // const marcador = document.createElement('input');
//         // marcador.type = 'checkbox'; 
//         // marcador.id = 'myCheckbox'; 

//         // lista.appendChild(marcador);

//         // Atribuindo o texto da entrada do usuário como a tarefa ao lado do checkbox
//         lista.textContent = item;

//         // Criando a label do marcador dinamicamente (será o texto da tarefa)
//         // const label = document.createElement('label');
//         // label.htmlFor = 'myCheckbox' // Associando o label com o marcador
//         // item = label;
    
//         // marcador.appendChild(item);

//         // Colocando a tarefa na área de tarefas
//         areaRecebeTarefas.appendChild(lista);

//         // Limpando a entrada anterior
//         entradaUsuario.value = '';
//     }
// }

// Dizendo que a função de adiocionar tarefas deve ser do tipo eventListener
botaoInsere.addEventListener("click",  adicionarTarefa);

function adicionarTarefa() {
    // Resguardando o valor do input
    const entradaUsuario = document.querySelector(".entrada-usuario");

    // trim() vai remover os espaços em branco do input
    const textoTarefa = entradaUsuario.value.trim();

    // Verifica se o input não está vazio, se for verdadeiro, a função é encerrada
    if (textoTarefa === "") return;

    // Criando uma nova tarefa e um checkbox
    var novaTarefa = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Define o conteúdo/texto da tarefa
    novaTarefa.textContent = textoTarefa;
    novaTarefa.prepend(checkbox); // Coloca a checkbox antes do texto
    checkbox.style.cssText = "margin-right:10px;width:20px;height:20px;outline:none;"
    novaTarefa.style.cssText = "margin:5px 0 5px 10px;";

    // Adiciona a nova tarefa à lista/área de tarefas
    var lista = document.querySelector(".area-tarefas-lista");
    lista.appendChild(novaTarefa);

    // Limpa o input
    entradaUsuario.value = "";

    
    // Mudando a aparência de uma tarefa quando ela for marcada como checked
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            novaTarefa.style.cssText = "text-decoration:line-through;color:#a0a0a0;"
        } else {
            novaTarefa.style.cssText = "text-decoration:none;color:#000;"
        }   
    })
}


botaoRemove.addEventListener("click", removerTarefa);
function removerTarefa() {
    if (checkbox.checked && novaTarefa != " ") {
        lista.removeChild(novaTarefa);
        novaTarefa.innerHTML = "";
    }
}
