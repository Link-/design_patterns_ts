"use strict";
exports.__esModule = true;
/**
 * The Singleton Implementation
 *
 * @export
 * @class Singleton
 */
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    /**
     * Static method that will create a PrivateSingleton instance once
     * and then it will always return the instance stores in uniqueInstance
     *
     * @returns {PrivateSingleton}
     * @memberof Singleton
     */
    Singleton.getInstance = function () {
        if (Singleton.uniqueInstance == null) {
            Singleton.uniqueInstance = new PrivateSingleton();
        }
        return Singleton.uniqueInstance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
/**
 * The object that you'd like to have 1 unique instance of
 *
 * @class PrivateSingleton
 */
var PrivateSingleton = /** @class */ (function () {
    function PrivateSingleton() {
    }
    return PrivateSingleton;
}());
