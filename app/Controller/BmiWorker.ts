import Person from '../Models/Person';
import { workerData, parentPort } from 'worker_threads';





const getOverWeightPeopleCount = (updatePersons) => {
    return updatePersons.filter((person) => {
        return person.BmiCategory == 'Overweight';
    }).length;
}

const calculateBMIInfo = async (lstpersons) => {
    try{
        const persons = lstpersons;
        let updatePersons : Person[] = [];
        await Promise.all(persons.map(async (eachPerson) => {
            let bmiPerson = new Person(eachPerson.Gender, eachPerson.HeightCm, eachPerson.WeightKg);
            await bmiPerson.calculateBMIInfo();
            updatePersons.push(bmiPerson);
        }));
        return { updatePersons, numOfOverWeight: getOverWeightPeopleCount(updatePersons)};
    }

    catch(err){
        throw new Error(`Error in calculateBMIInfo ${err}`);
    }
    
}

const runBmi = async () => {
    parentPort.postMessage(await calculateBMIInfo(workerData));
};

runBmi().catch(err => console.log(err));
