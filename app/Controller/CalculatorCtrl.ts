import BmiService from '../Services/BmiService';

const calculateBMI = async (req, res) => {
        try{
            const updatedPerons = await BmiService.calculateBMIInfo(req);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(updatedPerons));
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
            
        } 
}

export default {
    calculateBMI
}