function RequirementsCalculator() {
	//TODO consider activity level
}

RequirementsCalculator.prototype.calcCalories = function(gender, weight, age, activityLevel) {
	if(gender == "female") {
		return this.calcCaloriesFemale(weight, age, activityLevel);
	} else {
		return this.calcCaloriesMale(weight, age, activityLevel);
	}	
}

RequirementsCalculator.prototype.calcCaloriesFemale = function(weight, age, activityLevel) {
	if(age < 17) {
		return weight * 13.4 + 692;
	} else if(age >= 17 && age < 30) {
		return weight * 14.8 + 487;
	} else if(age >= 30 && age < 60) {
		return weight * 8.3 + 846;
	} else if(age >= 60 && age < 75) {
		return weight * 9.8 + 687;
	} else if(age >= 75) {
		return weight * 8.3 + 624;
	}
}

RequirementsCalculator.prototype.calcCaloriesMale = function(weight, age, activityLevel) {
	if(age < 17) {
		return weight * 17.7 + 657;
	} else if(age >= 17 && age < 30) {
		return weight * 15.1 + 692;
	} else if(age >= 30 && age < 60) {
		return weight * 11.5 + 873;
	} else if(age >= 60 && age < 75) {
		return weight * 11.9 + 700;
	} else if(age >= 75) {
		return weight * 8.3 + 820;
	}
}

RequirementsCalculator.prototype.calcProtein = function(weight, age, activityLevel) {
	return weight * 0.17 * 6.25;
}

RequirementsCalculator.prototype.calcFluid = function(weight, age, activityLevel) {
	if(weight <= 60) {
		return weight * 30;
	} else {
		return weight * 35;
	}
}