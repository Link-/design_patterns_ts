"use strict";
exports.__esModule = true;
var simple_factory_1 = require("./simple_factory");
var pizzaStore = new simple_factory_1.PizzaStore();
pizzaStore.orderPizza('veggie');
pizzaStore.orderPizza('pepperoni');
pizzaStore.orderPizza('hawai');
