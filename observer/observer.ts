namespace observer {

  /**
   *
   *
   * @export
   * @interface Observer
   */
  export interface Observer {
    update(data: String): void;
  }

  /**
   *
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
   *
   * @export
   * @class ConcreteObserver
   */
  export class ConcreteObserver implements Observer {
    /**
     *
     *
     * @param {String} data
     * @memberof ConcreteObserver
     */
    update(data: String) {
      console.log(data);
    }
  }

  /**
   *
   *
   * @export
   * @class ConcreteSubject
   */
  export class ConcreteSubject implements Subject {
    
    private observersList: Array<Observer> = [];
    private data: String = 'initial value';

    /**
     *
     *
     * @param {Observer} o
     * @memberof ConcreteSubject
     */
    public registerObserver(o: Observer) {
      this.observersList.push(o);
    }

    /**
     *
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
     *
     *
     * @memberof ConcreteSubject
     */
    public notifyObservers() {
      this.observersList.forEach((item: Observer) => {
        item.update(this.data);
      });
    }

    /**
     *
     *
     * @param {String} data
     * @memberof ConcreteSubject
     */
    public setData(data: String) {
      this.data = data;
      this.notifyObservers();
    }
  }
}