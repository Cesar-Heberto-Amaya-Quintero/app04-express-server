import express from 'express';
import bodyParser from 'body-parser';

const app =express();

const port = 5000;

app.use(bodyParser.json()); //consumir cosas

const tacos = [
    {
        id: 1,
        name: 'de asada',
        quantity: 5,
        pica: 'no',
    },
    {
        id: 2,
        name: 'al pastor',
        quantity: 4,
        pica: 'yes',
    },
    {
        id: 3,
        name: 'cabeza',
        quantity: 6,
        pica: 'no',
    },
]

//Metodo GET o obtener
app.get('/',(request,response)=>{
    response.send(tacos);
});

app.post('/', (request,response)=>{
    const taco = request.body;
    const {name,quantity,pica} = request.body;
    taco.id = tacos.length +1;
    tacos.push(taco);
    response.send(taco);
    //response.send({tag: `Llevate ${quantity} unidades tan solo por ${price} pesos`})
});

app.listen(port, ()=> console.log(`Server started at: http://localhost:${port}`));