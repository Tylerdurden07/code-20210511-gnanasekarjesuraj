import BmiService from '../Services/BmiService';

const calculateBMI = async (req, res) => {
        try{
            const updatedPerons = await BmiService.calculateBMIInfo(req);
            res.status(200).send(JSON.stringify(updatedPerons));
        }
        catch(err) {
            console.log(err);
        } 
}

export default {
    calculateBMI
}