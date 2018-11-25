import { Controller, LightOnCommand, LightOffCommand, Light } from './command';


let livingLight = new Light('Living Room');
let lightOn = new LightOnCommand(livingLight);
let lightOff = new LightOffCommand(livingLight);
let controller = new Controller(lightOn, lightOff);

controller.pushOnBtn();
controller.pushOffBtn();
controller.pushOnBtn();
controller.pushUndoBtn();