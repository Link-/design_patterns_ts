"use strict";
exports.__esModule = true;
/**
 *
 * @export
 * @class ConcreteObserver
 */
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(id) {
        this.id = id;
    }
    /**
     * Implementation of the update() method. This will be called by the
     * ConcreteSubject whenever the data changes
     *
     * @param {String} data
     * @memberof ConcreteObserver
     */
    ConcreteObserver.prototype.update = function (data) {
        console.log(this.id + ": " + data);
    };
    return ConcreteObserver;
}());
exports.ConcreteObserver = ConcreteObserver;
/**
 * Implements the Subject interface. Also contains the implementation
 * for notifyObservers()
 *
 * @export
 * @class ConcreteSubject
 */
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observersList = [];
        this.data = 'initial value';
    }
    /**
     * Add observer to the observersList. When that's done it will start
     * receiving updates when the data changes
     *
     * @param {Observer} o
     * @memberof ConcreteSubject
     */
    ConcreteSubject.prototype.registerObserver = function (o) {
        this.observersList.push(o);
    };
    /**
     * Removes observer from observersList. It will stop receiving updates
     * when the data changes
     *
     * @param {Observer} o
     * @memberof ConcreteSubject
     */
    ConcreteSubject.prototype.removeObserver = function (o) {
        var itemIdx = this.observersList.indexOf(o);
        if (itemIdx > 0) {
            this.observersList.splice(itemIdx, 1);
        }
    };
    /**
     * Call the update() for all observers in observersList
     *
     * @memberof ConcreteSubject
     */
    ConcreteSubject.prototype.notifyObservers = function () {
        var _this = this;
        this.observersList.forEach(function (item) {
            item.update(_this.data);
        });
    };
    /**
     * Called when data has been updated. It will notify all registered
     * observers.
     *
     * @private
     * @memberof ConcreteSubject
     */
    ConcreteSubject.prototype.dataUpdated = function () {
        this.notifyObservers();
    };
    /**
     * Setter method to update the data value
     *
     * @param {String} data
     * @memberof ConcreteSubject
     */
    ConcreteSubject.prototype.setData = function (data) {
        this.data = data;
        this.dataUpdated();
    };
    return ConcreteSubject;
}());
exports.ConcreteSubject = ConcreteSubject;
