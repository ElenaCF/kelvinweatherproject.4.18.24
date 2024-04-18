// The variable "kelvin" is the variable that stores the value of the kelvin temperature. 
const kelvin = 0;
// The "celsius" value stores the subtraction value of the "kelvin" variable and the number 273.
const celsius = kelvin - 273;
// Calculates the fahrenheit variable.
let fahrenheit = celsius * (9/5) + 32;
// Rounds down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
//Outputs the temperature in Fahrenheit temperature.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Converts the celsius temperature to the Newton scale.
let newton = celsius * (33/100);
//Rounds down the Newton temperature.
newton = Math.floor(newton);
//Outputs the Newton temperature.
console.log(`The Newton temperature is ${newton}.`)
