/**
 * Product of the factory
 *
 * @export
 * @class Pizza
 */
export class Pizza {
  protected name: String;
  protected bakingTime: Number;

  prepare() {
    console.log(`Preparing ${this.name}`);
  }

  bake() {
    console.log(`Baking ... ETA: ${this.bakingTime} minutes`);
  }

  cut() {
    console.log(`Cutting...`);
  }

  box() {
    console.log(`Boxing...`);
  }
}

/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class CheesePizza
 * @extends {Pizza}
 */
export class CheesePizza extends Pizza {
  /**
   * Creates an instance of CheesePizza.
   * @memberof CheesePizza
   */
  constructor() {
    super();
    this.name = 'Cheese Pizza';
    this.bakingTime = 5;
  }
}

/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class PepperoniPizza
 * @extends {Pizza}
 */
export class PepperoniPizza extends Pizza {
  /**
   * Creates an instance of PepperoniPizza.
   * @memberof PepperoniPizza
   */
  constructor() {
    super();
    this.name = 'Pepperoni Pizza';
    this.bakingTime = 8;
  }
}

/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class VeggiePizza
 * @extends {Pizza}
 */
export class VeggiePizza extends Pizza {
  /**
   * Creates an instance of VeggiePizza.
   * @memberof VeggiePizza
   */
  constructor() {
    super();
    this.name = 'Veggiterian Pizza';
    this.bakingTime = 4;
  }
}

/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class VeggiePizza
 * @extends {Pizza}
 */
export class HawaianPizza extends Pizza {
  /**
   * Creates an instance of HawaianPizza.
   * @memberof HawaianPizza
   */
  constructor() {
    super();
    this.name = 'Hawaian Pizza';
    this.bakingTime = 9;
  }
}

/**
 * The factory where pizza instances are created.
 * This is the only place that refers to the concrete Pizza classes.
 *
 * @export
 * @class SimplePizzaFactory
 */
export class SimplePizzaFactory {
  static createPizza(type: String): Pizza {
    switch(type) {
      case 'cheese':
        return new CheesePizza();
        break;
      case 'pepperoni':
        return new PepperoniPizza();
        break;
      case 'veggie':
        return new VeggiePizza();
        break;
      case 'hawai':
        return new HawaianPizza();
        break;
      default:
        throw new Error('Pizza type not available');
    }
  }
}

/**
 * Client of the Factory
 *
 * @export
 * @class PizzaStore
 */
export class PizzaStore {
  /**
   * Uses the SimplePizzaFactory to create an instance of a pizza
   * of a certain type
   *
   * @param {String} type
   * @memberof PizzaStore
   */
  orderPizza(type: String) {
    let pizza: Pizza = SimplePizzaFactory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}