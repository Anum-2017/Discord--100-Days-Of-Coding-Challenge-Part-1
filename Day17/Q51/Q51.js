"use strict";
//Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Original function
function calculateRectangleArea(width, height) {
    return width * height;
}
// Refactored to arrow function
const calculateRectangleAreaArrow = (width, height) => width * height;
const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
console.log("Area of rectangle is:", area);
