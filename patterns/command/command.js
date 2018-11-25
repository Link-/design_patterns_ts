"use strict";
exports.__esModule = true;
/**
 * This is a NullObject acts as a placeholder until a Command
 * that has an execute() implementation fills its place
 *
 * @export
 * @class NoCommand
 * @implements {Command}
 */
var NoCommand = /** @class */ (function () {
    function NoCommand() {
    }
    NoCommand.prototype.execute = function () { };
    NoCommand.prototype.undo = function () { };
    return NoCommand;
}());
exports.NoCommand = NoCommand;
/**
 * Turn a Light device on and can undo the action
 *
 * @export
 * @class LightOnCommand
 * @implements {Command}
 */
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        this.light.off();
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
/**
 * Turn a Light device off and can undo the action
 *
 * @export
 * @class LightOffCommand
 * @implements {Command}
 */
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        this.light.on();
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
/**
 * This is the device to be turned ON / OFF
 *
 * @export
 * @class Light
 * @implements {Device}
 */
var Light = /** @class */ (function () {
    function Light(location) {
        this.location = location;
    }
    Light.prototype.on = function () {
        console.log("Light @ " + this.location + " is ON");
    };
    Light.prototype.off = function () {
        console.log("Light @ " + this.location + " is OFF");
    };
    return Light;
}());
exports.Light = Light;
/**
 * We assume that the controller only has 3 buttons (ON, OFF and UNDO)
 * It doesn't care about the device, it only cares about the Command
 * assigned to each of the 3 buttons
 *
 * @export
 * @class Controller
 */
var Controller = /** @class */ (function () {
    function Controller(onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
        this.undoCommand = new NoCommand();
    }
    Controller.prototype.pushOnBtn = function () {
        this.onCommand.execute();
        this.undoCommand = this.onCommand;
    };
    Controller.prototype.pushOffBtn = function () {
        this.offCommand.execute();
        this.undoCommand = this.offCommand;
    };
    Controller.prototype.pushUndoBtn = function () {
        this.undoCommand.undo();
    };
    return Controller;
}());
exports.Controller = Controller;
