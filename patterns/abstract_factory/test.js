"use strict";
exports.__esModule = true;
var abstract_factory_1 = require("./abstract_factory");
var nycStore = new abstract_factory_1.NYCPizzaStore();
var chicagoStore = new abstract_factory_1.ChicagoPizzaStore();
// Order an NYC Cheese Pizza
nycStore.orderPizza('cheese');
// Order a Chicago Pepperoni Pizza
chicagoStore.orderPizza('pepperoni');
