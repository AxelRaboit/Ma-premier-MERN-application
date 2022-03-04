import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

//Execution de la configuration de dotenv
dotenv.config()

//Constante du port de connexion
//process.env provient de dotenv, puis la constante PORT est défini dans le fichier .env
const PORT = process.env.PORT || 3001

//Instanciation de l'application via express
const app = express();

//Indiquer à express que nous voulons envoyer des datas au format JSON
app.use(express.json())

//Connecter mongoose à MongoDB
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//Utilisation des routes
app.use(routes);

//Création de l'instance permettant le lançage d'un serveur sur le port demandé
app.listen(PORT, () => {
    console.log(`Le serveur est lançé sur le port : ${PORT}`)
})

