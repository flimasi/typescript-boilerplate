import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({'ping': 'pong'})
} )


app.listen(3333, () =>{
    console.log('Server Started on port 3333')
});

