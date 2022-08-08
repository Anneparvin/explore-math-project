// inchToFeet
function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
  }
  var feet = inchToFeet(60);
  console.log(feet);
  // feet to inch
  function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
  }
  var inch = feetToInch(5);
  console.log(inch);
  
  // leap year
  function leapYearCalculation(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return year + " is a leap year";
    } else {
      return year + " is not a leap year";
    }
  }
  var myYear = 2012;
  var isMyLeapYear = leapYearCalculation(myYear);
  console.log(isMyLeapYear);
  // leap year2
  function myLeap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return year + "is a leap year";
    } else {
      return year + "is not a leap year";
    }
  }
  var year = 2022;
  var myLeapYear = myLeap(2022);
  console.log(myLeapYear);
  
  // miles to km
  function milesToKilometers(miles) {
    var kilometers = miles * 1.60934;
    return kilometers;
  }
  var result = milesToKilometers(2);
  console.log(result);
  // kilometer to miles
  function kilometersToMiles(kilometers) {
    var miles = 6 / 1.60934;
    return miles;
  }
  var result = milesToKilometers(1.60934);
  console.log(result);
  // date function
  var now = new Date();
  console.log(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear());
  // concatination
  var a = 10;
  var b = 20;
  var c = a + b;
  console.log(c);
  // multiplication
  var a = 10;
  var b = 20;
  a++;
  console.log(a);
  // if else grade system
  var per = 120;
  
  if (per >= 80 && per <= 100) {
    console.log("you are in merit");
  } else if (per >= 60 && per <= 79) {
    console.log("you are in 1st division");
  } else if (per >= 45 && per <= 59) {
    console.log("you are in 2nd division");
  } else if (per >= 33 && per <= 44) {
    console.log("you are in 3rd division");
  } else if (per < 32) {
    console.log("you are in fail");
  } else {
    console.log("please enter valid number");
  }
  // array 
  var ages = [10, 23, 19, 20];
  console.log(ages + " ");
  
  var b = ages.findIndex(underAge);
  console.log(b + " ");
  function underAge(ages) {
    return ages <= 18;
  }
  
  
  