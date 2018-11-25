/**
 * Command Interface
 *
 * @export
 * @interface Command
 */
export interface Command {
  execute();
  undo();
}

/**
 * This is a NullObject acts as a placeholder until a Command
 * that has an execute() implementation fills its place
 *
 * @export
 * @class NoCommand
 * @implements {Command}
 */
export class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}

/**
 * Turn a Light device on and can undo the action
 *
 * @export
 * @class LightOnCommand
 * @implements {Command}
 */
export class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}

/**
 * Turn a Light device off and can undo the action
 *
 * @export
 * @class LightOffCommand
 * @implements {Command}
 */
export class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}

/**
 * Device interface
 *
 * @export
 * @interface Device
 */
export interface Device {
  on();
  off();
}

/**
 * This is the device to be turned ON / OFF
 *
 * @export
 * @class Light
 * @implements {Device}
 */
export class Light implements Device {
  public location: String;

  constructor(location: String) {
    this.location = location;
  }

  on(): void {
    console.log(`Light @ ${this.location} is ON`);
  }

  off(): void {
    console.log(`Light @ ${this.location} is OFF`);
  }
}

/**
 * We assume that the controller only has 3 buttons (ON, OFF and UNDO)
 * It doesn't care about the device, it only cares about the Command
 * assigned to each of the 3 buttons
 *
 * @export
 * @class Controller
 */
export class Controller {
  private onCommand: Command;
  private offCommand: Command;
  private undoCommand: Command;

  constructor(onCommand: Command, offCommand: Command) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
    this.undoCommand = new NoCommand();
  }

  pushOnBtn(): void {
    this.onCommand.execute();
    this.undoCommand = this.onCommand;
  }

  pushOffBtn(): void {
    this.offCommand.execute();
    this.undoCommand = this.offCommand;
  }

  pushUndoBtn(): void {
    this.undoCommand.undo();
  }
}