import express from "express";
import calculatorRoute from '../Routes/CalculatorRouter';
import {Express} from 'express-serve-static-core'
import bodyParser from 'body-parser';

export async function createServer() : Promise<Express>{
    
let server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(calculatorRoute);

return server;

}