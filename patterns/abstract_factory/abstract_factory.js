"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * Ingredient
 *
 * @export
 * @abstract
 * @class Dough
 */
var Dough = /** @class */ (function () {
    function Dough() {
    }
    return Dough;
}());
exports.Dough = Dough;
/**
 * Ingredient
 *
 * @export
 * @abstract
 * @class Cheese
 */
var Cheese = /** @class */ (function () {
    function Cheese() {
    }
    return Cheese;
}());
exports.Cheese = Cheese;
/**
 * Ingredient
 *
 * @export
 * @abstract
 * @class Sauce
 */
var Sauce = /** @class */ (function () {
    function Sauce() {
    }
    return Sauce;
}());
exports.Sauce = Sauce;
/**
 * Concrete Ingredient Class
 *
 * @export
 * @class MozarellaCheese
 * @extends {Cheese}
 */
var MozarellaCheese = /** @class */ (function (_super) {
    __extends(MozarellaCheese, _super);
    function MozarellaCheese() {
        var _this = _super.call(this) || this;
        _this.name = 'Mozarella Cheese';
        return _this;
    }
    return MozarellaCheese;
}(Cheese));
exports.MozarellaCheese = MozarellaCheese;
/**
 * Concrete Ingredient Class
 *
 * @export
 * @class ReggianoCheese
 * @extends {Cheese}
 */
var ReggianoCheese = /** @class */ (function (_super) {
    __extends(ReggianoCheese, _super);
    function ReggianoCheese() {
        var _this = _super.call(this) || this;
        _this.name = 'Reggiano Cheese';
        return _this;
    }
    return ReggianoCheese;
}(Cheese));
exports.ReggianoCheese = ReggianoCheese;
/**
 * Concrete Ingredient Class
 *
 * @export
 * @class PlumTomatoSauce
 * @extends {Sauce}
 */
var PlumTomatoSauce = /** @class */ (function (_super) {
    __extends(PlumTomatoSauce, _super);
    function PlumTomatoSauce() {
        var _this = _super.call(this) || this;
        _this.name = 'Plum Tomato Sauce';
        return _this;
    }
    return PlumTomatoSauce;
}(Sauce));
exports.PlumTomatoSauce = PlumTomatoSauce;
/**
 * Concrete Ingredient Class
 *
 * @export
 * @class MarinaraSauce
 * @extends {Sauce}
 */
var MarinaraSauce = /** @class */ (function (_super) {
    __extends(MarinaraSauce, _super);
    function MarinaraSauce() {
        var _this = _super.call(this) || this;
        _this.name = 'Marinara Sauce';
        return _this;
    }
    return MarinaraSauce;
}(Sauce));
exports.MarinaraSauce = MarinaraSauce;
/**
 * Concrete Ingredient Class
 *
 * @export
 * @class ThickCrustDough
 * @extends {Dough}
 */
var ThickCrustDough = /** @class */ (function (_super) {
    __extends(ThickCrustDough, _super);
    function ThickCrustDough() {
        var _this = _super.call(this) || this;
        _this.name = 'Thick Crust Dough';
        return _this;
    }
    return ThickCrustDough;
}(Dough));
exports.ThickCrustDough = ThickCrustDough;
/**
 * Concrete Ingredient Class
 *
 * @export
 * @class ThinCrustDough
 * @extends {Dough}
 */
var ThinCrustDough = /** @class */ (function (_super) {
    __extends(ThinCrustDough, _super);
    function ThinCrustDough() {
        var _this = _super.call(this) || this;
        _this.name = 'Thin Crust Dough';
        return _this;
    }
    return ThinCrustDough;
}(Dough));
exports.ThinCrustDough = ThinCrustDough;
/**
 * Concrete NYC Ingredient Factory
 *
 * @export
 * @class NYPizzaIngredientFactory
 * @implements {IngredientFactory}
 */
var NYPizzaIngredientFactory = /** @class */ (function () {
    function NYPizzaIngredientFactory() {
    }
    NYPizzaIngredientFactory.prototype.createDough = function () {
        return new ThickCrustDough();
    };
    NYPizzaIngredientFactory.prototype.createCheese = function () {
        return new ReggianoCheese();
    };
    NYPizzaIngredientFactory.prototype.createSauce = function () {
        return new MarinaraSauce();
    };
    return NYPizzaIngredientFactory;
}());
exports.NYPizzaIngredientFactory = NYPizzaIngredientFactory;
/**
 * Concrete Chicago Ingredient Factory
 *
 * @export
 * @class ChicagoIngredientFactory
 * @implements {IngredientFactory}
 */
var ChicagoIngredientFactory = /** @class */ (function () {
    function ChicagoIngredientFactory() {
    }
    ChicagoIngredientFactory.prototype.createDough = function () {
        return new ThinCrustDough();
    };
    ChicagoIngredientFactory.prototype.createCheese = function () {
        return new MozarellaCheese();
    };
    ChicagoIngredientFactory.prototype.createSauce = function () {
        return new PlumTomatoSauce();
    };
    return ChicagoIngredientFactory;
}());
exports.ChicagoIngredientFactory = ChicagoIngredientFactory;
/**
 * @export
 * @abstract
 * @class Pizza
 */
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    /**
     * Use the Ingredients Factory to create the items
     *
     * @memberof Pizza
     */
    Pizza.prototype.prepare = function () {
        this.dough = this.ingredientsFactory.createCheese();
        this.cheese = this.ingredientsFactory.createDough();
        this.sauce = this.ingredientsFactory.createSauce();
    };
    Pizza.prototype.bake = function () {
        console.log("Baking ... ETA: " + this.bakingTime + " minutes");
    };
    Pizza.prototype.cut = function () {
        console.log("Cutting...");
    };
    Pizza.prototype.box = function () {
        console.log("Boxing...");
    };
    return Pizza;
}());
exports.Pizza = Pizza;
/**
 * Concrete Cheese Pizza
 *
 * @export
 * @class CheesePizza
 * @extends {Pizza}
 */
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza(ingredientsFactory) {
        var _this = _super.call(this) || this;
        _this.name = 'Cheese Pizza';
        _this.bakingTime = 8;
        _this.ingredientsFactory = ingredientsFactory;
        return _this;
    }
    return CheesePizza;
}(Pizza));
exports.CheesePizza = CheesePizza;
/**
 * Concrete Pepperoni Pizza
 *
 * @export
 * @class PepperoniPizza
 * @extends {Pizza}
 */
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    function PepperoniPizza(ingredientsFactory) {
        var _this = _super.call(this) || this;
        _this.name = 'Pepperoni Pizza';
        _this.bakingTime = 10;
        _this.ingredientsFactory = ingredientsFactory;
        return _this;
    }
    return PepperoniPizza;
}(Pizza));
exports.PepperoniPizza = PepperoniPizza;
/**
 *
 *
 * @export
 * @abstract
 * @class PizzaStore
 */
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.createPizza = function (type) {
        switch (type) {
            case 'cheese':
                return new CheesePizza(this.ingredientFactory);
                break;
            case 'pepperoni':
                return new PepperoniPizza(this.ingredientFactory);
                break;
            default:
                throw new Error('Pizza type not available');
        }
    };
    /**
     * Uses the SimplePizzaFactory to create an instance of a pizza
     * of a certain type
     *
     * @param {String} type
     * @memberof PizzaStore
     */
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
/**
 *
 *
 * @export
 * @class NYCPizzaStore
 * @extends {PizzaStore}
 */
var NYCPizzaStore = /** @class */ (function (_super) {
    __extends(NYCPizzaStore, _super);
    function NYCPizzaStore() {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = new NYPizzaIngredientFactory();
        return _this;
    }
    return NYCPizzaStore;
}(PizzaStore));
exports.NYCPizzaStore = NYCPizzaStore;
/**
 *
 *
 * @export
 * @class ChicagoPizzaStore
 * @extends {PizzaStore}
 */
var ChicagoPizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoPizzaStore, _super);
    function ChicagoPizzaStore() {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = new ChicagoIngredientFactory();
        return _this;
    }
    return ChicagoPizzaStore;
}(PizzaStore));
exports.ChicagoPizzaStore = ChicagoPizzaStore;
