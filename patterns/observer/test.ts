import { ConcreteObserver, ConcreteSubject } from './observer';

let observerObjA = new ConcreteObserver("ObjectA");
let observerObjB = new ConcreteObserver("ObjectB");
let dispatcher = new ConcreteSubject();

dispatcher.registerObserver(observerObjA);
dispatcher.registerObserver(observerObjB);
dispatcher.setData("This message should be shared by both observers");
dispatcher.removeObserver(observerObjB);
dispatcher.setData("This message should be shared by only 1 observer");