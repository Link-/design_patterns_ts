"use strict";
exports.__esModule = true;
var factory_method_1 = require("./factory_method");
var nycStore = new factory_method_1.NYCPizzaStore();
var chicagoStore = new factory_method_1.ChicagoPizzaStore();
// Order an NYC Cheese Pizza
nycStore.orderPizza('cheese');
// Order a Chicago Pepperoni Pizza
chicagoStore.orderPizza('pepperoni');
chicagoStore.orderPizza('mexican');
