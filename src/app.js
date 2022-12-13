import express from 'express';

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
  ]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
});
app.get('/livros/:id', (req, res) => {
    //cria a variável índice, que é a função busca livro, e passa o id solicitado na url
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    //cria a variável índice, que é a função busca livro, e passa o id solicitado na url
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})
app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.json(`Livro ${id} excluído com sucesso!`);
})

function buscaLivro(id) {
    //verifica se, para cada livro, o id é igual ao id recebido na função
    return livros.findIndex(livro => livro.id == id)
}


export default app;