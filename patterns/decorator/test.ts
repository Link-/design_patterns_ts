import { Blue, White, Green, Red, BaseColor } from './decorator';

// We start with a base color
let baseColor = new BaseColor();
console.log("Description:", baseColor.getDescription());
console.log("Code: ", baseColor.getHexCode());

// Then we add a Decorator (Blue in this case)
let mixWithBlue = new Blue(baseColor);
console.log("Description: ", mixWithBlue.getDescription());
console.log("Code: ", mixWithBlue.getHexCode());

// Then we add another Decorator
let mixWithGreen = new Green(mixWithBlue);
console.log("Description: ", mixWithGreen.getDescription());
console.log("Code: ", mixWithGreen.getHexCode());

let mixWithRed = new Red(mixWithGreen);
console.log("Description: ", mixWithRed.getDescription());
console.log("Code: ", mixWithRed.getHexCode());
