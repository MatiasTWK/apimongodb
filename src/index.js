const express = require ('express');
const mongoose = require ('mongoose');
require("dotenv").config({ path: 'variables.env'});
const userRoutes = require("./routes/user");

console.log(process.env.DB_URL)


const app = express();


//middleware
app.use(express.json());
app.use('/api', userRoutes)


//RUTAS
app.get('/', (req,res) => {
    res.send('Bienvenido a la API');
});


//CONEXION A MONGODB
mongoose
.connect(process.env.DB_URL).then (() => console.log("Conexion Completada"))
.catch ((error) => console.error (error));

//Leer localhost de puerto y variables
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.listen(port,host, () => console.log ('El servidor funciona correctamente')); 