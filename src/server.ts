import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({'message': 'Hello World'})
} )

console.log('Server Started on port 3333')

app.listen(3333);

