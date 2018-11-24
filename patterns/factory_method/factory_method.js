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
var NYCCheesePizza = /** @class */ (function (_super) {
    __extends(NYCCheesePizza, _super);
    /**
     * Creates an instance of CheesePizza.
     * @memberof CheesePizza
     */
    function NYCCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'NYC Cheese Pizza';
        _this.bakingTime = 5;
        return _this;
    }
    return NYCCheesePizza;
}(Pizza));
exports.NYCCheesePizza = NYCCheesePizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class PepperoniPizza
 * @extends {Pizza}
 */
var NYCPepperoniPizza = /** @class */ (function (_super) {
    __extends(NYCPepperoniPizza, _super);
    /**
     * Creates an instance of PepperoniPizza.
     * @memberof PepperoniPizza
     */
    function NYCPepperoniPizza() {
        var _this = _super.call(this) || this;
        _this.name = 'NYC Pepperoni Pizza';
        _this.bakingTime = 8;
        return _this;
    }
    return NYCPepperoniPizza;
}(Pizza));
exports.NYCPepperoniPizza = NYCPepperoniPizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class VeggiePizza
 * @extends {Pizza}
 */
var NYCVeggiePizza = /** @class */ (function (_super) {
    __extends(NYCVeggiePizza, _super);
    /**
     * Creates an instance of VeggiePizza.
     * @memberof VeggiePizza
     */
    function NYCVeggiePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'NYC Veggiterian Pizza';
        _this.bakingTime = 4;
        return _this;
    }
    return NYCVeggiePizza;
}(Pizza));
exports.NYCVeggiePizza = NYCVeggiePizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class CheesePizza
 * @extends {Pizza}
 */
var ChicagoCheesePizza = /** @class */ (function (_super) {
    __extends(ChicagoCheesePizza, _super);
    /**
     * Creates an instance of CheesePizza.
     * @memberof CheesePizza
     */
    function ChicagoCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Chicago Cheese Pizza';
        _this.bakingTime = 5;
        return _this;
    }
    return ChicagoCheesePizza;
}(Pizza));
exports.ChicagoCheesePizza = ChicagoCheesePizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class PepperoniPizza
 * @extends {Pizza}
 */
var ChicagoPepperoniPizza = /** @class */ (function (_super) {
    __extends(ChicagoPepperoniPizza, _super);
    /**
     * Creates an instance of PepperoniPizza.
     * @memberof PepperoniPizza
     */
    function ChicagoPepperoniPizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Chicago Pepperoni Pizza';
        _this.bakingTime = 8;
        return _this;
    }
    return ChicagoPepperoniPizza;
}(Pizza));
exports.ChicagoPepperoniPizza = ChicagoPepperoniPizza;
/**
 * Concrete Pizza that implements the Pizza Interace
 *
 * @export
 * @class VeggiePizza
 * @extends {Pizza}
 */
var ChicagoVeggiePizza = /** @class */ (function (_super) {
    __extends(ChicagoVeggiePizza, _super);
    /**
     * Creates an instance of VeggiePizza.
     * @memberof VeggiePizza
     */
    function ChicagoVeggiePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'Chicago Veggiterian Pizza';
        _this.bakingTime = 4;
        return _this;
    }
    return ChicagoVeggiePizza;
}(Pizza));
exports.ChicagoVeggiePizza = ChicagoVeggiePizza;
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
 * Implementation of the createPizza method specific for the NYC Store
 * This is the Factory method
 *
 * @export
 * @class NYCPizzaStore
 * @extends {PizzaStore}
 */
var NYCPizzaStore = /** @class */ (function (_super) {
    __extends(NYCPizzaStore, _super);
    function NYCPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYCPizzaStore.prototype.createPizza = function (type) {
        switch (type) {
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
    };
    return NYCPizzaStore;
}(PizzaStore));
exports.NYCPizzaStore = NYCPizzaStore;
/**
 * Chicago Store
 */
var ChicagoPizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoPizzaStore, _super);
    function ChicagoPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Implementation of the createPizza method specific for the Chicago Store
     * This is the Factory method
     *
     * @param {String} type
     * @returns {Pizza}
     * @memberof ChicagoPizzaStore
     */
    ChicagoPizzaStore.prototype.createPizza = function (type) {
        switch (type) {
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
    };
    return ChicagoPizzaStore;
}(PizzaStore));
exports.ChicagoPizzaStore = ChicagoPizzaStore;
