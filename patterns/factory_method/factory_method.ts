/**
 * Product of the factory
 *
 * @export
 * @class Pizza
 */
export abstract class Pizza {
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
export class NYCCheesePizza extends Pizza {
  /**
   * Creates an instance of CheesePizza.
   * @memberof CheesePizza
   */
  constructor() {
    super();
    this.name = 'NYC Cheese Pizza';
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
export class NYCPepperoniPizza extends Pizza {
  /**
   * Creates an instance of PepperoniPizza.
   * @memberof PepperoniPizza
   */
  constructor() {
    super();
    this.name = 'NYC Pepperoni Pizza';
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
export class NYCVeggiePizza extends Pizza {
  /**
   * Creates an instance of VeggiePizza.
   * @memberof VeggiePizza
   */
  constructor() {
    super();
    this.name = 'NYC Veggiterian Pizza';
    this.bakingTime = 4;
  }
}

/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class CheesePizza
 * @extends {Pizza}
 */
export class ChicagoCheesePizza extends Pizza {
  /**
   * Creates an instance of CheesePizza.
   * @memberof CheesePizza
   */
  constructor() {
    super();
    this.name = 'Chicago Cheese Pizza';
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
export class ChicagoPepperoniPizza extends Pizza {
  /**
   * Creates an instance of PepperoniPizza.
   * @memberof PepperoniPizza
   */
  constructor() {
    super();
    this.name = 'Chicago Pepperoni Pizza';
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
export class ChicagoVeggiePizza extends Pizza {
  /**
   * Creates an instance of VeggiePizza.
   * @memberof VeggiePizza
   */
  constructor() {
    super();
    this.name = 'Chicago Veggiterian Pizza';
    this.bakingTime = 4;
  }
}

/**
 * Client of the Factory
 *
 * @export
 * @class PizzaStore
 */
export abstract class PizzaStore {

  /**
   * Abstract method that creates the pizza and is implemented by the 
   * concrete classes
   */
  public abstract createPizza(type: String): Pizza;

  /**
   * Uses the SimplePizzaFactory to create an instance of a pizza
   * of a certain type
   *
   * @param {String} type
   * @memberof PizzaStore
   */
  orderPizza(type: String) {
    let pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

/**
 * Implementation of the createPizza method specific for the NYC Store
 * This is the Factory method
 *
 * @export
 * @class NYCPizzaStore
 * @extends {PizzaStore}
 */
export class NYCPizzaStore extends PizzaStore {
  createPizza(type: String): Pizza {
    switch(type) {
      case 'cheese':
        return new NYCCheesePizza();
        break;
      case 'pepperoni':
        return new NYCPepperoniPizza();
        break;
      case 'veggie':
        return new NYCVeggiePizza();
        break;
      default:
        throw new Error('Pizza type not available');
    }
  }
}

/**
 * Chicago Store
 */
export class ChicagoPizzaStore extends PizzaStore {
  /**
   * Implementation of the createPizza method specific for the Chicago Store
   * This is the Factory method
   *
   * @param {String} type
   * @returns {Pizza}
   * @memberof ChicagoPizzaStore
   */
  createPizza(type: String): Pizza {
    switch(type) {
      case 'cheese':
        return new ChicagoCheesePizza();
        break;
      case 'pepperoni':
        return new ChicagoPepperoniPizza();
        break;
      case 'veggie':
        return new ChicagoVeggiePizza();
        break;
      default:
        throw new Error('Pizza type not available');
    }
  }
}