import { Router, Request, Response } from 'express';
import { map } from '../sockets/socket';

const router = Router();

router.get('/map', (req: Request, res: Response) => {
    res.json(map.getMarkers());
});


export default router;