import express, { Request, Response } from 'express';
import { goHome } from '../services/home-service'

const getHome = async (req: Request, res: Response) => {
    return res.send(goHome());
};

const router = express.Router();

router.get("/home", getHome);

export default router;
