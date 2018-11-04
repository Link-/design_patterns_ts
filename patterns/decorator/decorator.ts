/**
 * Color Interface implemented by the concrete component and decorators
 *
 * @interface Color
 */
export interface Color {
  getDescription();
  getHexCode();
}

/**
 * Concrete Color Component
 *
 * @export
 * @class BaseColor
 * @implements {Color}
 */
export class BaseColor implements Color {
  private description = 'BaseColor';

  getDescription(): String {
    return this.description;
  }

  getHexCode(): String {
    return '#NO_CODE';
  }
}

/**
 * Color Decorator
 *
 * @export
 * @class Black
 * @implements {Color}
 */
export class Blue implements Color {
  private description = 'Blue';
  private baseColor: Color;

  constructor(baseColor: Color) {
    this.baseColor = baseColor;
  }

  getDescription(): String {
    return `${this.description} ${this.baseColor.getDescription()}`;
  }

  getHexCode(): String {
    return `#0000FF ${this.baseColor.getHexCode()}`;
  }
}

/**
 * Color Decorator
 *
 * @export
 * @class White
 * @implements {Color}
 */
export class White implements Color {
  private description = 'White';
  private baseColor: Color;

  constructor(baseColor: Color) {
    this.baseColor = baseColor;
  }

  getDescription(): String {
    return `${this.description} ${this.baseColor.getDescription()}`;
  }

  getHexCode(): String {
    return `#FFFFFF  ${this.baseColor.getHexCode()}`;
  }
}

/**
 * Color Decorator
 *
 * @export
 * @class Green
 * @implements {Color}
 */
export class Green implements Color {
  private description = 'Green';
  private baseColor: Color;

  constructor(baseColor: Color) {
    this.baseColor = baseColor;
  }

  getDescription(): String {
    return `${this.description} ${this.baseColor.getDescription()}`;
  }

  getHexCode(): String {
    return `#008000  ${this.baseColor.getHexCode()}`;
  }
}

/**
 * Color Decorator
 *
 * @export
 * @class Red
 * @implements {Color}
 */
export class Red implements Color {
  private description = 'Red';
  private baseColor: Color;

  constructor(baseColor: Color) {
    this.baseColor = baseColor;
  }

  getDescription(): String {
    return `${this.description} ${this.baseColor.getDescription()}`;
  }

  getHexCode(): String {
    return `#FF0000  ${this.baseColor.getHexCode()}`;
  }
}
