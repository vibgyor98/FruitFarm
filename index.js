const server = http.createServer((req, res) => {
    res.send('Hello there, Welcome to FruitFarm!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});