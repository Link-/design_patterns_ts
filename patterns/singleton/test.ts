import { Singleton } from './singleton';

// Get a new instance of PrivateSingleton
let uniqueObject = Singleton.getInstance();
uniqueObject.name = 'ONE';
console.log(uniqueObject.name);

// This will return the same instance stored in uniqueObject
let sameObject = Singleton.getInstance();
console.log(sameObject.name);