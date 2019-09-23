import { Request, Response } from 'express';
import { postgreSqlService } from './postgresql.service';
import { Task } from '../models/task';

class TaskService {

    public saveTasks(req: Request, res: Response) {
        const currentTime: Date = new Date();
        const task: Task = new Task();
        task.userId = req.body.userId;
        task.activityId = req.body.activityId;
        task.message = req.body.message;
        task.status = req.body.status;
        task.creationDate = currentTime;
        postgreSqlService.saveTasks(task, res);
    }

    public getTasks(req: Request, res: Response) {
        postgreSqlService.getActivities(res);
    }
}
export const taskService = new TaskService();