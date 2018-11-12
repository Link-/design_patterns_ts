import { NYCPizzaStore, ChicagoPizzaStore } from './factory_method';

let nycStore = new NYCPizzaStore();
let chicagoStore = new ChicagoPizzaStore();

// Order an NYC Cheese Pizza
nycStore.orderPizza('cheese');

// Order a Chicago Pepperoni Pizza
chicagoStore.orderPizza('pepperoni');

chicagoStore.orderPizza('mexican');