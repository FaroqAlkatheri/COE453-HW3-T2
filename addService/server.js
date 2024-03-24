const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World, from gcloud GCP Cloud Run');
    });

app.post('/', (req, res) =>{
    const body = req.body;
    if (typeof body.X === 'undefined' || typeof body.Y === 'undefined') {
        res.status(400).send('Bad Request: Missing X or Y in the request body');
        return;
      }
    
    const sum = body.X + body.Y;

    const responseObject = {
        X: body.X,
        Y: body.Y,
        Result: sum
    };

    res.status(200).json(responseObject);
});

app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);