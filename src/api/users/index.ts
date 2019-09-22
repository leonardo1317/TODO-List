import { Router } from 'express';
import {userService} from '../../services/user.service';
const router: Router = Router();

router.get('/',(req,res)=>res.send('Hola mundo'))
router.get('/sign_in',userService.Signin);
router.get('/sign_out',(req,res)=>res.send('disconect'))
export default router;