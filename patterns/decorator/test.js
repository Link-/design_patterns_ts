"use strict";
exports.__esModule = true;
var decorator_1 = require("./decorator");
// We start with a base color
var baseColor = new decorator_1.BaseColor();
console.log("Description:", baseColor.getDescription());
console.log("Code: ", baseColor.getHexCode());
// Then we add a Decorator (Blue in this case)
var mixWithBlue = new decorator_1.Blue(baseColor);
console.log("Description: ", mixWithBlue.getDescription());
console.log("Code: ", mixWithBlue.getHexCode());
// Then we add another Decorator
var mixWithGreen = new decorator_1.Green(mixWithBlue);
console.log("Description: ", mixWithGreen.getDescription());
console.log("Code: ", mixWithGreen.getHexCode());
var mixWithRed = new decorator_1.Red(mixWithGreen);
console.log("Description: ", mixWithRed.getDescription());
console.log("Code: ", mixWithRed.getHexCode());
