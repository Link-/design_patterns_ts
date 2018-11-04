"use strict";
exports.__esModule = true;
/**
 *
 *
 * @export
 * @class BaseColor
 * @implements {Color}
 */
var BaseColor = /** @class */ (function () {
    function BaseColor() {
        this.description = 'BaseColor';
    }
    BaseColor.prototype.getDescription = function () {
        return this.description;
    };
    BaseColor.prototype.getHexCode = function () {
        return '#NO_CODE';
    };
    return BaseColor;
}());
exports.BaseColor = BaseColor;
/**
 *
 *
 * @export
 * @class Black
 * @implements {Color}
 */
var Blue = /** @class */ (function () {
    function Blue(baseColor) {
        this.description = 'Blue';
        this.baseColor = baseColor;
    }
    Blue.prototype.getDescription = function () {
        return this.description + " " + this.baseColor.getDescription();
    };
    Blue.prototype.getHexCode = function () {
        return "#0000FF " + this.baseColor.getHexCode();
    };
    return Blue;
}());
exports.Blue = Blue;
/**
 *
 *
 * @export
 * @class White
 * @implements {Color}
 */
var White = /** @class */ (function () {
    function White(baseColor) {
        this.description = 'White';
        this.baseColor = baseColor;
    }
    White.prototype.getDescription = function () {
        return this.description + " " + this.baseColor.getDescription();
    };
    White.prototype.getHexCode = function () {
        return "#FFFFFF  " + this.baseColor.getHexCode();
    };
    return White;
}());
exports.White = White;
/**
 *
 *
 * @export
 * @class Green
 * @implements {Color}
 */
var Green = /** @class */ (function () {
    function Green(baseColor) {
        this.description = 'Green';
        this.baseColor = baseColor;
    }
    Green.prototype.getDescription = function () {
        return this.description + " " + this.baseColor.getDescription();
    };
    Green.prototype.getHexCode = function () {
        return "#008000  " + this.baseColor.getHexCode();
    };
    return Green;
}());
exports.Green = Green;
/**
 *
 *
 * @export
 * @class Red
 * @implements {Color}
 */
var Red = /** @class */ (function () {
    function Red(baseColor) {
        this.description = 'Red';
        this.baseColor = baseColor;
    }
    Red.prototype.getDescription = function () {
        return this.description + " " + this.baseColor.getDescription();
    };
    Red.prototype.getHexCode = function () {
        return "#FF0000  " + this.baseColor.getHexCode();
    };
    return Red;
}());
exports.Red = Red;
