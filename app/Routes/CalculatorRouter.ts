import {Router} from 'express';
import CalculateBMI from '../Controller/CalculatorCtrl';

const router = Router();

router.post("/bmi", CalculateBMI.calculateBMI);


const baseRouter = Router();
baseRouter.use("/app-server/api/v1", router);

export default baseRouter;