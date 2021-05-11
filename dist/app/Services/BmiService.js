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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../Models/Person"));
const getOverWeightPeopleCount = (updatePersons) => {
    return updatePersons.filter((person) => {
        return person.BmiCategory == 'Overweight';
    }).length;
};
const calculateBMIInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const persons = req.body;
        let updatePersons = [];
        yield Promise.all(persons.map((eachPerson) => __awaiter(void 0, void 0, void 0, function* () {
            let bmiPerson = new Person_1.default(eachPerson.Gender, eachPerson.HeightCm, eachPerson.WeightKg);
            yield bmiPerson.calculateBMIInfo();
            updatePersons.push(bmiPerson);
        })));
        return { updatePersons, numOfOverWeight: getOverWeightPeopleCount(updatePersons) };
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = {
    calculateBMIInfo
};
//# sourceMappingURL=BmiService.js.map