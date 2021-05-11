import express from "express";
import calculatorRoute from './app/Routes/CalculatorRouter';

let app = express();
app.use(calculatorRoute);

const PORT = process.env.PORT || 3050;
app.listen(PORT, () => console.info(`Server is up and running on ${PORT}`));