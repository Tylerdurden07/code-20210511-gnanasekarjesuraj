import express from "express";
import calculatorRoute from './app/Routes/CalculatorRouter';
import bodyParser from 'body-parser';

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(calculatorRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server is up and running on ${PORT}`));