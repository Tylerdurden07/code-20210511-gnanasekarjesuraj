# code-20210511-gnanasekarjesuraj

a node api exposting a POST url for calculating BMI info

HTTP POST http://localhost:3000/app-server/api/v1/bmi

sample payload 

```sh
[
{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, 
{ "Gender": "Male", "HeightCm": 161, "WeightKg":85 },
{ "Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
{ "Gender": "Female", "HeightCm": 166, "WeightKg": 62 },
{"Gender": "Female", "HeightCm": 150, "WeightKg": 70 },
{"Gender": "Female", "HeightCm": 167, "WeightKg": 82 }
]
```


sample response 

```sh
{"updatePersons":[{"Gender":"Male","HeightCm":171,"WeightKg":96,"Bmi":32.83,"BmiCategory":"Moderately
obese","HealthRisk":"Medium risk"},{"Gender":"Male","HeightCm":161,"WeightKg":85,"Bmi":32.79,"BmiCategory":"Moderately
obese","HealthRisk":"Medium risk"},{"Gender":"Male","HeightCm":180,"WeightKg":77,"Bmi":23.77,"BmiCategory":"Normal
Weight","HealthRisk":"Low risk"},{"Gender":"Female","HeightCm":166,"WeightKg":62,"Bmi":22.5,"BmiCategory":"Normal
Weight","HealthRisk":"Low risk"},{"Gender":"Female","HeightCm":150,"WeightKg":70,"Bmi":31.11,"BmiCategory":"Moderately
obese","HealthRisk":"Medium
risk"},{"Gender":"Female","HeightCm":167,"WeightKg":82,"Bmi":29.4,"BmiCategory":"Overweight","HealthRisk":" Enhanced
risk"}],"numOfOverWeight":1}
```

