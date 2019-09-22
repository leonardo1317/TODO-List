import express from 'express';
import users from './api/users';
//Initializations
const app = express();
//settings
const port = process.env.PORT || 3000;
//Routes
app.use('/users',users);
//starting the server
app.listen(port,()=>{
    console.log(`Api rest corriendo en el puerto ${port}`);
});