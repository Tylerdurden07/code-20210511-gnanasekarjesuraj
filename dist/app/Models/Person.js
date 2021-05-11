"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(gender, heightCm, weightKg) {
        this.Gender = gender;
        this.HeightCm = heightCm;
        this.WeightKg = weightKg;
    }
    calculateBMI() {
        return __awaiter(this, void 0, void 0, function* () {
            const heightInMeter = Math.pow(this.HeightCm / 100, 2);
            this.Bmi = Math.round((this.WeightKg / heightInMeter + Number.EPSILON) * 100) / 100;
        });
    }
    calculateBmiCategoryAndHealthRisk() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.Bmi <= 18.4) {
                this.BmiCategory = "Underweight";
                this.HealthRisk = "Malnutrition risk";
            }
            else if (this.Bmi >= 18.5 && this.Bmi <= 24.9) {
                this.BmiCategory = "Normal Weight";
                this.HealthRisk = "Low risk";
            }
            else if (this.Bmi >= 25 && this.Bmi <= 29.9) {
                this.BmiCategory = "Overweight";
                this.HealthRisk = " Enhanced risk";
            }
            else if (this.Bmi >= 30 && this.Bmi <= 34.9) {
                this.BmiCategory = "Moderately obese";
                this.HealthRisk = "Medium risk";
            }
            else if (this.Bmi >= 35 && this.Bmi <= 39.9) {
                this.BmiCategory = "Severely obese";
                this.HealthRisk = "High risk";
            }
            else if (this.Bmi >= 40) {
                this.BmiCategory = "Very severely obese";
                this.HealthRisk = "Very high risk";
            }
        });
    }
    calculateBMIInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            this.calculateBMI();
            this.calculateBmiCategoryAndHealthRisk();
        });
    }
}
exports.default = Person;
//# sourceMappingURL=Person.js.map