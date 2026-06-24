import { Router, Request, Response } from "express";
import allowRoles from "../middlewares/roles";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({ 
        message: "Public route" 
    });
});

router.get('/admin', allowRoles(['admin']), (req: Request, res: Response) => {
    res.send({ 
        message: "Welcome admin" 
    });
});

router.get('/reports', allowRoles(['admin', 'manager']), (req: Request, res: Response) => {
    res.send({ 
        message: "Reports area" 
    });
});

router.get('/inventory', allowRoles(['employee', 'manager']), (req: Request, res: Response) => {
    res.send({ 
        message: "Inventory area" 
    });
});

export default router;