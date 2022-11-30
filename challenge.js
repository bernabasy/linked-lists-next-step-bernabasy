class Node {
    constructor(value, next_node = null) {
        this.value = value;
        this.next_node = next_node;
    }
}
class LinkedList {
    // setup head and tail
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(number) {
        const node = new Node(number);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }
    get(index) {
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            if (count === index) {
                return currentNode.value;
            }
            count++;
            currentNode = currentNode.next;
        }
        return -1;
    }
    addAt(index, element) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            var node = new Node(element);
            var current, prev;
            current = this.head;
            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                var num = 0;
                // iterate over the list to find
                // the position to insert
                while (num < index) {
                    num++;
                    prev = current;
                    current = current.next;
                }
                // adding an element
                node.next = current;
                prev.next = node;
            }
            this.size++;
        }
    }
    // removes an element from the
    // specified location
    remove(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var current, prev, num = 0;
            current = this.head;
            prev = current;
            // deleting first element
            if (index === 0) {
                this.head = current.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (num < index) {
                    num++;
                    prev = current;
                    current = current.next;
                }
                // remove the element
                prev.next = current.next;
            }
            this.size--;
            // return the remove element
            return current.element;
        }
    }
}
const list = new LinkedList()
list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)
console.log(list.get(2))
// => 11
console.log(list.get(3))
// => 5
module.exports = LinkedList
