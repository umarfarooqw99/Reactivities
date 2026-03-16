import { makeAutoObservable } from 'mobx';
export default class CounterStore {
    title = 'Counter store';
    count = 0;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    constructor() {        
        makeAutoObservable(this);
    }
    
    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Count increment by ${amount} - Current count is ${this.count}`)
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Count decremented by ${amount} - Current count is ${this.count}`)
    }

    get getEventCount() {
        return this.events.length
    }

}