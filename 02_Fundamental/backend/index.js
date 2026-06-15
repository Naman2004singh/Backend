import express from 'express';
// this is module js where files are assemble asynchronously

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/jokes', (req, res) =>{
    const jokes = [
        {
            id : 1,
            joke : "joke1"
        },
        {
            id : 2,
            joke : "joke2"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serving at port ${port}`);
})