import { Router } from 'express';
const router: Router = Router();
router.get('/',(req,res)=>res.send('Hola mundo'))
router.get('/sign_in',(req,res)=>res.send('registrado'))
export default router;