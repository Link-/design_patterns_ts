/**
 * The Singleton Implementation
 *
 * @export
 * @class Singleton
 */
export class Singleton {
  /**
   * Member variable that's going to contain the instance of the PrivateSingle
   * object
   *
   * @private
   * @static
   * @type {PrivateSingleton}
   * @memberof Singleton
   */
  private static uniqueInstance: PrivateSingleton;

  /**
   * Static method that will create a PrivateSingleton instance once
   * and then it will always return the instance stores in uniqueInstance
   *
   * @returns {PrivateSingleton}
   * @memberof Singleton
   */
  public static getInstance(): PrivateSingleton {
    if (Singleton.uniqueInstance == null) {
      Singleton.uniqueInstance = new PrivateSingleton();
    }
    return Singleton.uniqueInstance;
  }
}

/**
 * The object that you'd like to have 1 unique instance of
 *
 * @class PrivateSingleton
 */
class PrivateSingleton {
  // Object implementation goes here
  public name: String;
}
