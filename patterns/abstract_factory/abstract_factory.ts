/**
 * Ingredient
 *
 * @export
 * @abstract
 * @class Dough
 */
export abstract class Dough {
  protected name: String;
}
/**
 * Ingredient
 *
 * @export
 * @abstract
 * @class Cheese
 */
export abstract class Cheese {
  protected name: String;
}
/**
 * Ingredient
 *
 * @export
 * @abstract
 * @class Sauce
 */
export abstract class Sauce {
  protected name: String;
}

/**
 * Concrete Ingredient Class
 *
 * @export
 * @class MozarellaCheese
 * @extends {Cheese}
 */
export class MozarellaCheese extends Cheese {
  constructor() {
    super();
    this.name = 'Mozarella Cheese';
  }
}

/**
 * Concrete Ingredient Class
 *
 * @export
 * @class ReggianoCheese
 * @extends {Cheese}
 */
export class ReggianoCheese extends Cheese {
  constructor() {
    super();
    this.name = 'Reggiano Cheese';
  }
}

/**
 * Concrete Ingredient Class
 *
 * @export
 * @class PlumTomatoSauce
 * @extends {Sauce}
 */
export class PlumTomatoSauce extends Sauce {
  constructor() {
    super();
    this.name = 'Plum Tomato Sauce';
  }
}

/**
 * Concrete Ingredient Class
 *
 * @export
 * @class MarinaraSauce
 * @extends {Sauce}
 */
export class MarinaraSauce extends Sauce {
  constructor() {
    super();
    this.name = 'Marinara Sauce';
  }
}

/**
 * Concrete Ingredient Class
 *
 * @export
 * @class ThickCrustDough
 * @extends {Dough}
 */
export class ThickCrustDough extends Dough {
  constructor() {
    super();
    this.name = 'Thick Crust Dough';
  }
}

/**
 * Concrete Ingredient Class
 *
 * @export
 * @class ThinCrustDough
 * @extends {Dough}
 */
export class ThinCrustDough extends Dough {
  constructor() {
    super();
    this.name = 'Thin Crust Dough';
  }
}

/**
 * IngredientFactory (Abstract Factory)
 *
 * @export
 * @interface IngredientFactory
 */
export interface IngredientFactory {
  createDough();
  createSauce();
  createCheese();
}

/**
 * Concrete NYC Ingredient Factory
 *
 * @export
 * @class NYPizzaIngredientFactory
 * @implements {IngredientFactory}
 */
export class NYPizzaIngredientFactory implements IngredientFactory {
  createDough() {
    return new ThickCrustDough();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createSauce() {
    return new MarinaraSauce();
  }
}

/**
 * Concrete Chicago Ingredient Factory
 *
 * @export
 * @class ChicagoIngredientFactory
 * @implements {IngredientFactory}
 */
export class ChicagoIngredientFactory implements IngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createCheese() {
    return new MozarellaCheese();
  }

  createSauce() {
    return new PlumTomatoSauce();
  }
}

/**
 * @export
 * @abstract
 * @class Pizza
 */
export abstract class Pizza {
  protected name: String;
  protected bakingTime: Number;
  protected dough: Dough;
  protected cheese: Cheese;
  protected sauce: Sauce;
  protected ingredientsFactory: IngredientFactory;

  /**
   * Use the Ingredients Factory to create the items
   *
   * @memberof Pizza
   */
  prepare() {
    this.dough = this.ingredientsFactory.createCheese();
    this.cheese = this.ingredientsFactory.createDough();
    this.sauce = this.ingredientsFactory.createSauce();
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
 * Concrete Cheese Pizza
 *
 * @export
 * @class CheesePizza
 * @extends {Pizza}
 */
export class CheesePizza extends Pizza {
  constructor(ingredientsFactory: IngredientFactory) {
    super();
    this.name = 'Cheese Pizza';
    this.bakingTime = 8;
    this.ingredientsFactory = ingredientsFactory;
  }
}

/**
 * Concrete Pepperoni Pizza
 *
 * @export
 * @class PepperoniPizza
 * @extends {Pizza}
 */
export class PepperoniPizza extends Pizza {
  constructor(ingredientsFactory: IngredientFactory) {
    super();
    this.name = 'Pepperoni Pizza';
    this.bakingTime = 10;
    this.ingredientsFactory = ingredientsFactory;
  }
}

/**
 *
 *
 * @export
 * @abstract
 * @class PizzaStore
 */
export abstract class PizzaStore {

  protected ingredientFactory: IngredientFactory;

  createPizza(type: String): Pizza {
    switch(type) {
      case 'cheese':
        return new CheesePizza(this.ingredientFactory)
        break;
      case 'pepperoni':
        return new PepperoniPizza(this.ingredientFactory);
        break;
      default:
        throw new Error('Pizza type not available');
    }
  }

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
 *
 *
 * @export
 * @class NYCPizzaStore
 * @extends {PizzaStore}
 */
export class NYCPizzaStore extends PizzaStore {
  constructor() {
    super();
    this.ingredientFactory = new NYPizzaIngredientFactory();
  }
}

/**
 *
 *
 * @export
 * @class ChicagoPizzaStore
 * @extends {PizzaStore}
 */
export class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super();
    this.ingredientFactory = new ChicagoIngredientFactory();
  }
}