import { Request, Response, NextFunction } from 'express';
import { tokenService } from './token.service';
class MiddlewareService {

    public verifyToken(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.authorization) {
            res.status(403).send({ message: 'Falló la autenticación.' });
            return;
        }
        const token: string = req.headers.authorization.split(" ")[1];
        if (tokenService.verifyToken(token)) {
            return res.status(401).send({ message: 'El token ha expirado.' });
        }
        next();
    }

    public verifyBody(req: Request, res: Response, next: NextFunction) {
        const contentType = req.headers['content-type'];
        if (!contentType || !req.is('application/json') || Object.keys(req.body).length === 0) {
            res.status(400).send('Solicitud incorrecta.');
        } else {
            next();
        }
    }
}
export const middlewareService = new MiddlewareService();