export default class Person {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
    Bmi?: number;
    BmiCategory?: string;
    HealthRisk?: string;
  
    constructor(gender: string, heightCm: number, weightKg: number) {
      this.Gender = gender;
      this.HeightCm = heightCm;
      this.WeightKg = weightKg;
    }

    async calculateBMI(){
        const heightInMeter  = Math.pow( this.HeightCm/100 , 2);
        this.Bmi = Math.round((this.WeightKg/heightInMeter+ Number.EPSILON) * 100) / 100;
    }

    async calculateBmiCategoryAndHealthRisk(){
        if(this.Bmi <= 18.4) {
            this.BmiCategory = "Underweight";
            this.HealthRisk = "Malnutrition risk";
        }
        else if(this.Bmi >= 18.5 && this.Bmi <=24.9){
            this.BmiCategory = "Normal Weight";
            this.HealthRisk = "Low risk";
        } else if(this.Bmi >= 25 && this.Bmi <= 29.9){
            this.BmiCategory = "Overweight";
            this.HealthRisk = " Enhanced risk";
        } else if(this.Bmi >= 30 && this.Bmi <= 34.9){
            this.BmiCategory = "Moderately obese";
            this.HealthRisk = "Medium risk";
        } else if(this.Bmi >= 35 && this.Bmi <= 39.9){
            this.BmiCategory = "Severely obese"
            this.HealthRisk = "High risk";
        } else if(this.Bmi >= 40){
            this.BmiCategory = "Very severely obese";
            this.HealthRisk = "Very high risk";
        }

    }

    async calculateBMIInfo(){
        this.calculateBMI();
        this.calculateBmiCategoryAndHealthRisk();
    }

  }