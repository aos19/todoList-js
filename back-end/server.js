// Node.js = tecnologia que permite escrevermos e executarmos JavaScript no lado servidor da aplicação, de modo que se utiize apenas uma linguagem (js) para construir a toda a aplicação:
    // No front-end = (js pelo navegador)
    // No back-end = (Node.js, js pelo servidor)

/* Um servidor deve conter:
    -> Importação das tecnologias/módulos necessários (node e cors);
    -> Uma porta para resguardar a entrada ao servidor;
    -> variável app para criar uma instância do sevidor/aplicação
    -> Uma rota principal para acessar o servidor pela url (nesse caso, localhost:8000);
        - app.get = cria as rotas da aplicação
        - app.listen = testa o funcionamento do servidor
        - app.use = monta ou "usa" um middleware em um determinado caminho  

    -> Um middleware para tratar as reqs de diferentes origens


    - Geralmente, a api (construção das rotas e comunicação por métodos HTTP) é já feita nesse arquivo server.js;
*/

// Importando as ferramentas de servidor e API
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Criando uma aplicação express
const app = express();

// Criando a porta do servidor
const PORT = 8000;

// Usando o middleware para tratar requisições
app.use(cors());

// Analisa o corpo das reqs HTTP quando o cliente envia dados para o servidor no formato JSON
app.use(express.json())

// Servindo os arquivos estáticos (html, css e js)
app.use(express.static(path.join(__dirname, "front-end")));

// Array vazio para armazenar temporariamente as tarefas enquanto o servidor está rodando
let tarefas = [];

// Criando a rota principal e colocando uma callback com dois parâmetros = req (pedido, a "pergunta" que está sendo feita) e res (resposta que será dada ao usuário)
app.get('/', (req, res) => {
    res.send("Seja bem-vindo ao meu servidor para a to do list");
})

// Rota para listar as tarefas
app.get('/api/tarefas', (req, res) => {
    res.json(tarefas);
})

// Rota para adicionar/criar uma nova tarefa
app.post('/api/tarefas', (req, res) => {
    const { texto } = req.body;
    if (texto) {
        tarefas.push({ texto, concluida: false });
        // Status 201 = indicando que a req foi atendida com sucesso
        res.status(201).json({ mensagem: "Tarefa adicionada" });
    } else {
        // Status 400 = indicando um erro do usuario ao adicionar uma tarefa
        res.status(400).json({ erro: "Texto da tarefa é obrigatório" });
    }
})

// Teste de escuta do servidor com a utilização de um callback
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
})