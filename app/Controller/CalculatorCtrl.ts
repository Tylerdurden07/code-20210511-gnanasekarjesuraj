import OS from 'os';
import { Worker } from 'worker_threads';


    

const runService = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new  Worker(`${__dirname}/BmiWorker.js`, {workerData});
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if(code !==0){
                reject(new Error(`Worker stopped woth exit code ${code}`));
            }
        });
    });

}

const calculateBMI = async (req, res) => {
        try{
            runService(req.body).then((updatedPersons)=> {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(updatedPersons));
            }).catch(err => {throw new Error(err)});
            
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
            
        } 
}

export default {
    calculateBMI
}