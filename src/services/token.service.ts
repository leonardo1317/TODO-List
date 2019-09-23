import { User } from '../models/user';
import jwt from 'jwt-simple';
import moment from 'moment';
import { keys } from '../config/keys';

class TokenService {

    public createToken(user: User): string {

        const payload = {
            sub: user.userId,
            iat: moment().unix(),
            exp: moment().add(1, 'days').unix()
        }
        return jwt.encode(payload, keys.secretKeyToken);
    }


    public verifyToken(token: string): boolean {
        let expired: boolean = false;
        const payload = jwt.decode(token, keys.secretKeyToken);

        if (payload.exp <= moment().unix()) {
            expired = true;
        }
        return expired;
    }
}
export const tokenService = new TokenService();