import { Router } from 'express';
const router: Router = Router();
router.get('/',(req,res)=>res.send('Hola mundo'))
router.get('/sign_in',(req,res)=>res.send('connected'))
router.get('/sign_out',(req,res)=>res.send('disconect'))
export default router;