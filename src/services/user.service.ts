import { Request, Response } from 'express';
class UserService {

    public Signin(request: Request, response: Response) {
        response.send('connected');
    }
}
export const userService = new UserService();