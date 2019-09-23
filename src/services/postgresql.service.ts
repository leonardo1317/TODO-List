import { Client } from 'pg';
import { Response } from 'express';
import { connectionData } from '../config/connection.pg';
import { tokenService } from './token.service';
import { User } from '../models/user';
import { Activity } from '../models/activity';
import { Task } from '../models/task';
class PostgreSqlService {

    public saveUser(user: User, res: Response) {
        const query = 'INSERT INTO Users (UserName, Password, CreationDate) values($1, $2, $3)';
        const client: Client = new Client(connectionData);
        client.connect();
        client.query(query,
            [user.userName, user.password, user.creationDate])
            .then(response => {
                console.log(response.rows);
                res.status(201).send();
                client.end();
            })
            .catch(err => {
                res.status(500).send();
                console.log(err);
                client.end()
            });
    }

    public signIn(user: User, res: Response) {
        const query = 'SELECT UserId, UserName, Password from Users WHERE UserName=($1) AND Password=($2)';
        const client: Client = new Client(connectionData);
        client.connect();
        client.query(query,
            [user.userName, user.password])
            .then(response => {
                console.log(response.rows);
                let result: any[] = response.rows;
                if (result.length === 0) {
                    return res.status(404).send();
                }
                user.userId = result[0].userid;
                res.status(200).send({
                    token: tokenService.createToken(user)
                });
                client.end();
            })
            .catch(err => {
                res.status(500).send();
                console.log(err);
                client.end()
            });
    }

    public saveActivity(activity: Activity, res: Response) {
        const query = 'INSERT INTO Activities (Description, CreationDate) values($1, $2)';
        const client: Client = new Client(connectionData);
        client.connect();
        client.query(query,
            [activity.description, activity.creationDate])
            .then(response => {
                console.log(response.rows);
                res.status(201).send();
                client.end();
            })
            .catch(err => {
                res.status(500).send();
                console.log(err);
                client.end()
            });
    }

    public getActivities(res: Response) {
        const query = 'SELECT * from Activities';
        const client: Client = new Client(connectionData);
        client.connect();
        client.query(query)
            .then(response => {
                console.log(response.rows);
                res.status(200).send({
                    actividades: response.rows
                });
                client.end();
            })
            .catch(err => {
                res.status(500).send();
                console.log(err);
                client.end()
            });
    }


    public saveTasks(task: Task, res: Response) {
        const query = 'INSERT INTO Tasks (UserId, ActivityId, Message, Status, CreationDate)'+
        'values($1, $2, $3, $4, $5)';
        const client: Client = new Client(connectionData);
        client.connect();
        client.query(query,
            [task.userId, task.activityId, task.message, task.status, task.creationDate])
            .then(response => {
                console.log(response.rows);
                res.status(201).send();
                client.end();
            })
            .catch(err => {
                res.status(500).send();
                console.log(err);
                client.end()
            });
    }


}
export const postgreSqlService = new PostgreSqlService();