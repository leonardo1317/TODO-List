import express from 'express';
import account from './api/users';
//Initializations
const app = express();
//settings
const port = process.env.PORT || 3000;
//Routes
app.use('/users',account);
//starting the server
app.listen(port,()=>{
    console.log(`Api rest corriendo en el puerto ${port}`);
});