import { Request, Response } from 'express';
import { postgreSqlService } from './postgresql.service';
import { User } from '../models/user';

class UserService {

    public register(req: Request, res: Response) {
        const currentTime: Date = new Date();
        const user: User = new User();
        user.userName = req.body.userName;
        user.password = req.body.password;
        user.creationDate = currentTime;
        postgreSqlService.saveUser(user, res);
    }
    public signIn(req: Request, res: Response) {
        const user: User = new User();
        user.userName = req.body.userName;
        user.password = req.body.password;
        postgreSqlService.signIn(user, res);
    }


}
export const userService = new UserService();