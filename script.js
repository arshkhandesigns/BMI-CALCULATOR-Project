function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var heightUnit = document.getElementById("heightUnit").value;
    var weightUnit = document.getElementById("weightUnit").value;
    
    // Convert height to centimeters if user input in inches
    if (heightUnit === "in") {
      height *= 2.54;
    }
    
    // Convert weight to kilograms if user input in pounds
    if (weightUnit === "lb") {
      weight *= 0.453592;
    }
    
    var bmi = weight / ((height/100) * (height/100));
    bmi = bmi.toFixed(1);
    var result = document.getElementById("result");
    if (bmi < 18.5) {
      result.innerHTML = "Your BMI is " + bmi + ". You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
      result.innerHTML = "Your BMI is " + bmi + ". You have a normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
      result.innerHTML = "Your BMI is " + bmi + ". You are overweight.";
    } else {
      result.innerHTML = "Your BMI is " + bmi + ". You are obese.";
    }
  }
  