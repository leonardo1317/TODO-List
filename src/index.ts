import express from 'express';
import account from './routes/users';
const app = express();
const port = process.env.PORT || 3000;
//Routes
app.use('/users',account);
app.listen(port,()=>{
    console.log(`Api rest corriendo en el puerto ${port}`);
});