import BmiService from '../BmiService';

const request = { body :[
    {Gender: "Male", HeightCm: 175, WeightKg: 75 }
]};

const invalidRequest = {
}

const expectedResponse = {
    numOfOverWeight: 0,
       updatePersons:  [
          {
           Bmi: 24.49,
           BmiCategory: "Normal Weight",
           Gender: "Male",
           HealthRisk: "Low risk",
           HeightCm: 175,
           WeightKg: 75,
         },
       ]
}


describe('calculateBMIInfo method in BmiService', () => {
  it('should calculate BMI info for the given persons', async () => {
    const response = await BmiService.calculateBMIInfo(request);
    expect(response).toEqual(expectedResponse)
  });

  it('should throw error with invalid person payload in request param', async () => {
      try{
        const response = await BmiService.calculateBMIInfo({});
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toContain("Error in calculateBMIInfo ");
    }
  
    
  })
})