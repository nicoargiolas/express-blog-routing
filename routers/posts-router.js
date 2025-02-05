const express = require('express');
const postsRouter = express.Router();

const posts = require('../data/posts');

postsRouter.get('/', (req, res) => {
    res.json(posts);
});

postsRouter.get('/:id', (req, res) => {
    if (req.params.id < posts.length) {
        res.json(posts[req.params.id]);
    } else {
        res.send(`Il post ${req.params.id} non esiste`);
    }
});

postsRouter.post('/', (req, res) => {
    res.send('Creazione nuovo post');
});

postsRouter.put('/:id', (req, res) => {
    res.send(`Modifica integrale del post ${req.params.id}`);
});

postsRouter.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
});

postsRouter.delete('/:id', (req, res) => {
    res.send(`Eliminazione del post ${req.params.id}`);
});

module.exports = postsRouter;