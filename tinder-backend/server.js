// LAKTpC72nEx83TtA
import express from 'express';
import mongoose from 'mongoose';
import Cards from  './dbcards.js';
import Cors from 'cors';

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:LAKTpC72nEx83TtA@cluster0.65lkw.mongodb.net/tinderdb?retryWrites=true&w=majority";

//Middlewares
app.use(express.json);
app.use(Cors());

// DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

//API Endpoints
app.get('/',(req,res) => res.status(200).send("OM NAMH SHIVAAY"));

app.post('/tinder/cards', (req,res) =>{
    const dbcard = req.body

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/card', (req,res) =>{
   

    Cards.find(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
});

// Listners
app.listen(port, () => console.log(`Listening On Localhost: ${port}`));

