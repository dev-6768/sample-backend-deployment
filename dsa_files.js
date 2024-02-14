class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length == 0) {
            return "Underflow";
        }

        else {
            this.items.pop();
        }
        
    }

    peek() {
        if(this.items.length == 0) {
            return "Underflow";
        }
        else {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        return this.items;
    }
}

class Queue {
    constructor() {
        this.queue = [];
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(pushingItem) {
        this.queue.push(pushingItem);
        this.backIndex += 1;
    }

    dequeue() {
        const item = this.queue[this.frontIndex];
        delete this.queue[this.frontIndex];
        this.frontIndex += 1;
        return item;
    }

    peek() {
        return this.queue[this.frontIndex];
    }

    printQueue() {
        return this.queue;
    }

}

var stack = new Stack();
for(let i = 0; i<100; i++) {
    stack.push("a");
}

var queue = new Queue();
for(let i = 0; i < 100; i++) {
    queue.enqueue("a");
}

console.log(stack.printStack());
console.log(queue.printQueue());

var map_initial = new Map([
    [1,2],
    [2,3],
    [3,4]
])

map_initial.forEach(function(value) {
    console.log();
})


let graph = [];
for(let i = 0; i < 100; i++) {
    graph.push([]);
}

let test;