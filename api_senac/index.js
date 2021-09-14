const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;



app.use(express.json());



// Rotas da raiz "/"
app.get("/", (request, response) => {
response.send("Hello World");
});



app.post("/", (request, response) => {
response.send("Método POST");
});



app.put("/", (request, response) => {
response.send("Método PUT");
});



app.delete("/", (request, response) => {
response.send("Método DELETE");
});



// Banco de dados
const users = [
{ id: 1, name: "Pedro", email: "pedro@email.com" },
{ id: 2, name: "João", email: "joao@email.com" },
{ id: 3, name: "Marcos", email: "marcos@email.com" },
];



// Rotas de usuário "/users"



// Obter todos os usuários
app.get("/users", (req, res) => {
res.json(users);
});



// Obter um usuário em específico
app.get("/users/:id", (req, res) => {
const userId = req.params.id;



const user = users.find(user => user.id == userId);



if (!user) {
res.status(404).json({ message: "User not found!" });
}



res.json(user);
});



// Criar um usuário
app.post("/users", (req, res) => {
const { id, name, email } = req.body;





res.json(req.body);
});



// Atualizar as informações de um usuário
app.put("/users", (req, res) => {

});



// Remover um usuário
app.delete("/users/:id", (req, res) => {

});



app.listen(PORT, () => console.log("O servidor está rodando...")); 