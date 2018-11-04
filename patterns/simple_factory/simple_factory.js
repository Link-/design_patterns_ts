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
 * Product of the factory
 *
 * @export
 * @class Pizza
 */
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
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
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class CheesePizza
 * @extends {Pizza}
 */
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    /**
     * Creates an instance of CheesePizza.
     * @memberof CheesePizza
     */
    function CheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Cheese Pizza';
        _this.bakingTime = 5;
        return _this;
    }
    return CheesePizza;
}(Pizza));
exports.CheesePizza = CheesePizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class PepperoniPizza
 * @extends {Pizza}
 */
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    /**
     * Creates an instance of PepperoniPizza.
     * @memberof PepperoniPizza
     */
    function PepperoniPizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Pepperoni Pizza';
        _this.bakingTime = 8;
        return _this;
    }
    return PepperoniPizza;
}(Pizza));
exports.PepperoniPizza = PepperoniPizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class VeggiePizza
 * @extends {Pizza}
 */
var VeggiePizza = /** @class */ (function (_super) {
    __extends(VeggiePizza, _super);
    /**
     * Creates an instance of VeggiePizza.
     * @memberof VeggiePizza
     */
    function VeggiePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Veggiterian Pizza';
        _this.bakingTime = 4;
        return _this;
    }
    return VeggiePizza;
}(Pizza));
exports.VeggiePizza = VeggiePizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class VeggiePizza
 * @extends {Pizza}
 */
var HawaianPizza = /** @class */ (function (_super) {
    __extends(HawaianPizza, _super);
    /**
     * Creates an instance of HawaianPizza.
     * @memberof HawaianPizza
     */
    function HawaianPizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Hawaian Pizza';
        _this.bakingTime = 9;
        return _this;
    }
    return HawaianPizza;
}(Pizza));
exports.HawaianPizza = HawaianPizza;
/**
 * The factory where pizza instances are created.
 * This is the only place that refers to the concrete Pizza classes.
 *
 * @export
 * @class SimplePizzaFactory
 */
var SimplePizzaFactory = /** @class */ (function () {
    function SimplePizzaFactory() {
    }
    /**
     * Static method that creates instances of the different types of Pizzas
     *
     * @static
     * @param {String} type
     * @returns {Pizza}
     * @memberof SimplePizzaFactory
     */
    SimplePizzaFactory.createPizza = function (type) {
        switch (type) {
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
    };
    return SimplePizzaFactory;
}());
exports.SimplePizzaFactory = SimplePizzaFactory;
/**
 * Client of the Factory
 *
 * @export
 * @class PizzaStore
 */
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    /**
     * Uses the SimplePizzaFactory to create an instance of a pizza
     * of a certain type
     *
     * @param {String} type
     * @memberof PizzaStore
     */
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = SimplePizzaFactory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
