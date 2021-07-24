import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';

// Router class is similar to App but for a smaller amount of endpoints
const router: Router = Router();

// Any request to /feed or /users goes straight to respective routers
router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send(`V0`);
});

export const IndexRouter: Router = router;
