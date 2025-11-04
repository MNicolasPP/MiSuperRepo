import express from 'express';

const app = express();
const port = 3001;

app.listen(port);

app.get('/', (req, res) => {
    res.send('Hello pdFELIPE');
});


console.log('server on port', port);