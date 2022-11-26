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
            var curr, prev;
            curr = this.head;
            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding an element
                node.next = curr;
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
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
            // return the remove element
            return curr.element;
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
