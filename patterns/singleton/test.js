"use strict";
exports.__esModule = true;
var singleton_1 = require("./singleton");
// Get a new instance of PrivateSingleton
var uniqueObject = singleton_1.Singleton.getInstance();
uniqueObject.name = 'ONE';
console.log(uniqueObject.name);
// This will return the same instance stored in uniqueObject
var sameObject = singleton_1.Singleton.getInstance();
console.log(sameObject.name);
