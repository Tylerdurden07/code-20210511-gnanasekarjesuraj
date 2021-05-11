import Person from '../Models/Person'


const getOverWeightPeopleCount = (updatePersons) => {
    return updatePersons.filter((person) => {
        return person.BmiCategory == 'Overweight';
    }).length;
}

const calculateBMIInfo = async (req) => {
    try{
        const persons = req.body;
        let updatePersons : Person[] = [];
        await Promise.all(persons.map(async (eachPerson) => {
            let bmiPerson = new Person(eachPerson.Gender, eachPerson.HeightCm, eachPerson.WeightKg);
            await bmiPerson.calculateBMIInfo();
            updatePersons.push(bmiPerson);
        }));
        return { updatePersons, numOfOverWeight: getOverWeightPeopleCount(updatePersons)};
    }

    catch(err){
        console.log(err);
    }
    
}

export default {
    calculateBMIInfo
}