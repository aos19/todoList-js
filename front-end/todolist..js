// Variáveis dos elementos da página
const areaRecebeTarefas = document.querySelector('.area-tarefas-lista');
const entradaUsuario = document.querySelector('entrada-usuario').value;
const botaoInsere = document.querySelector('.botao-insere');

// Dizendo que a função de adiocionar tarefas deve ser do tipo eventListener
botaoInsere.addEventListener("click",  adicionarTarefa)

// Declarando e construindo a função de adicionar tarefas
function adicionarTarefa() {
    // Criando um checkbox para cada tarefa dinamicamente
    const marcador = document.createElement('input');
    marcador.type = 'checkbox';

    marcador.textContent = entradaUsuario;

    areaRecebeTarefas.appendChild(marcador);

    // Limpando a entrada anterior
    entradaUsuario.value = '';

    // areaRecebeTarefas.innerHTML = entradaUsuario;
}