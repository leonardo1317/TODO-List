import { Request, Response } from 'express';
import { postgreSqlService } from './postgresql.service';
import { Activity } from '../models/activity';

class ActivityService {

    public saveActivity(req: Request, res: Response) {
        const currentTime: Date = new Date();
        const activity: Activity = new Activity();
        activity.description = req.body.description;
        activity.creationDate = currentTime;
        postgreSqlService.saveActivity(activity, res);
    }

    public getActivities(req: Request, res: Response) {
        postgreSqlService.getActivities(res);
    }
}
export const activityService = new ActivityService();