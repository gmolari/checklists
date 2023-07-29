# Patient Medication Recommendation System - Documentation

## Introduction
This program is designed to collect certain information about a patient and determine whether the patient should take medication or not. Additionally, it calculates the recommended number of drops of the medication based on the patient's data.

## How to Use
1. Run the program in your preferred Python environment.
2. You will be prompted to enter various details about the patient.

### Input Details
1. **Age of the Patient**: Enter the patient's age in years.
2. **Diabetic Condition**: Enter 'S' or 'N' (case-insensitive) to indicate if the patient is diabetic or not.
3. **Pregnancy Status**: Enter 'S' or 'N' (case-insensitive) to indicate if the patient is pregnant or not.
4. **Weight of the Patient**: Enter the patient's weight in kilograms.
5. **Patient's Body Temperature**: Enter the patient's body temperature in Celsius.
6. **Patient's Gender**: Enter 'F' or 'M' (case-insensitive) to indicate the patient's gender.

### Output
The program will calculate the recommended number of drops of the medication based on the provided information and display the result.

## Program Logic

1. The program validates the patient's age to check if they are under 18 years old or not.
2. If the patient is under 18, the program recommends against taking the medication.
3. The program then asks about diabetic and pregnancy status, and it also validates the input.
4. Next, the program checks the patient's temperature to categorize it into different levels.
5. Based on the patient's gender and age, the program categorizes them into different groups.
6. Finally, the program calculates the recommended number of drops based on the patient's weight and the category they belong to.

## Function Explanation

1. **`contra(pri)`**: This function checks if a given input (`pri`) is a string representing 'S' or 's' (indicating yes) or an integer less than 8 (indicating age less than 8 years). If the condition is met, it prints a message stating that the medication is not recommended and calls the `main()` function again for another round of input.

2. **`sex(sex)`**: This function checks the patient's gender (`sex`) and returns a numeric value (1 for female and 2 for male). If an invalid gender is entered, it prints an error message and calls the `main()` function again.

3. **`maior(id)`**: This function checks the patient's age (`id`) and returns a numeric value (1 for age less than 18 and 2 for age 18 or older).

4. **`temp(pri)`**: This function checks the patient's temperature (`pri`) and categorizes it into different levels. It returns a numeric value (1, 2, or 3) representing the temperature category. If an invalid temperature is entered, it prints an error message and calls the `main()` function again.

5. **`full(pri, sec, ter)`**: This function takes three arguments representing different categories (pri, sec, and ter) and returns a corresponding divisor value based on the combination of these categories. The function is used to calculate the division factor for the patient's weight.

6. **`calc_geral(pri, sec)`**: This function takes two arguments (pri and sec) and returns the result of integer division between pri and sec. This result is used to calculate the recommended number of drops.

7. **`main()`:** This is the main function that controls the flow of the program. It takes user inputs for age, diabetic condition, pregnancy status, weight, temperature, and gender. Then it calls the above functions to process the data and calculate the recommended number of drops. After displaying the result, it asks the user if they want to exit the program or continue with another round of input.

## Example Usage

```
Qual a idade do paciente?
30
Digite apenas S (sim) e N (não).
O passiente é diabetico?
N
O paciente é gestante?
N
Qual o peso do paciente?
60.5
Qual a temperatura? 
38.5
Qual o sexo do paciente? (F/M)
F

Devem ser tomados 15 gotas.
Deseja sair do programa?
1-Sim
2-Não
```

## Note
This is a simplified example of a patient medication recommendation system and may not reflect actual medical practices. Always consult a qualified healthcare professional for medical advice and recommendations. The program does not take into account all possible scenarios and should not be used as a substitute for professional medical guidance.
