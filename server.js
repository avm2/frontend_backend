import express from "express";

const app= express();
app.use(express.static('dist'));
 

app.get('/api/jokes',(req,res) =>{
    const jokes = [
        {
            id:1,
            title:'Joke 1',
            content:'This is joke 1'
        },
        {
            id:2,
            title:'Joke 2',
            content:'This is joke 2'
        },
        {
            id:3,
            title:'Joke 3',
            content:'This is joke 3'
        }
    ];
    res.send(jokes);
});



const port =process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
});
