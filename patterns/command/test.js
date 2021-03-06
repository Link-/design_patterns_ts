"use strict";
exports.__esModule = true;
var command_1 = require("./command");
var livingLight = new command_1.Light('Living Room');
var lightOn = new command_1.LightOnCommand(livingLight);
var lightOff = new command_1.LightOffCommand(livingLight);
var controller = new command_1.Controller(lightOn, lightOff);
controller.pushOnBtn();
controller.pushOffBtn();
controller.pushOnBtn();
controller.pushUndoBtn();
