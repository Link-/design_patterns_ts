/**
 * All potential observers implement this interface.
 * The data parameter passed to update can be changed to be a more complex
 * object
 *
 * @export
 * @interface Observer
 */
export interface Observer {
  update(data: String): void;
}

/**
 * Objects use this interface to register as observers and also to remove
 * themselves from being observers
 *
 * @export
 * @interface Subject
 */
export interface Subject {
  /**
   * registerObserver
   */
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

/**
 * 
 * @export
 * @class ConcreteObserver
 */
export class ConcreteObserver implements Observer {

  /**
   * This is not necessary for the implementation. I use it to make
   * the object identifiable during testing
   *
   * @private
   * @type {String}
   * @memberof ConcreteObserver
   */
  private id: String;

  constructor(id: String) {
    this.id = id;
  }

  /**
   * Implementation of the update() method. This will be called by the 
   * ConcreteSubject whenever the data changes
   *
   * @param {String} data
   * @memberof ConcreteObserver
   */
  public update(data: String) {
    console.log(`${this.id}: ${data}`);
  }
}

/**
 * Implements the Subject interface. Also contains the implementation
 * for notifyObservers()
 *
 * @export
 * @class ConcreteSubject
 */
export class ConcreteSubject implements Subject {
  
  private observersList: Array<Observer> = [];
  private data: String = 'initial value';

  /**
   * Add observer to the observersList. When that's done it will start
   * receiving updates when the data changes
   *
   * @param {Observer} o
   * @memberof ConcreteSubject
   */
  public registerObserver(o: Observer) {
    this.observersList.push(o);
  }

  /**
   * Removes observer from observersList. It will stop receiving updates
   * when the data changes
   *
   * @param {Observer} o
   * @memberof ConcreteSubject
   */
  public removeObserver(o: Observer) {
    let itemIdx = this.observersList.indexOf(o);
    if (itemIdx > 0) {
      this.observersList.splice(itemIdx, 1);
    }
  }

  /**
   * Call the update() for all observers in observersList
   *
   * @memberof ConcreteSubject
   */
  public notifyObservers() {
    this.observersList.forEach((item: Observer) => {
      item.update(this.data);
    });
  }

  /**
   * Called when data has been updated. It will notify all registered
   * observers.
   *
   * @private
   * @memberof ConcreteSubject
   */
  private dataUpdated() {
    this.notifyObservers();
  }

  /**
   * Setter method to update the data value
   *
   * @param {String} data
   * @memberof ConcreteSubject
   */
  public setData(data: String) {
    this.data = data;
    this.dataUpdated();
  }
}