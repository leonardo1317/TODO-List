import { Router } from 'express';
import { userService } from '../../services/user.service';
import { activityService } from '../../services/activity.service';
import { taskService } from '../../services/task.service';
import { middlewareService } from '../../services/middleware.service';

const router: Router = Router();

router.post('/', middlewareService.verifyBody, userService.register);
router.post('/sign_in', middlewareService.verifyBody, userService.signIn);
router.post('/activities', middlewareService.verifyToken,
    middlewareService.verifyBody, activityService.saveActivity);
router.get('/activities', middlewareService.verifyToken,
    activityService.getActivities);
router.post('/activities/tasks', middlewareService.verifyToken,
    middlewareService.verifyBody, taskService.saveTasks);
export default router;