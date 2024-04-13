class ListNode<T> {
    value: T;
    prev: ListNode<T> | null;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    delete(value: T): void {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = current.next;
                    this.head!.prev = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail!.next = null;
                } else {
                    current.prev!.next = current.next;
                    current.next!.prev = current.prev;
                }
                break;
            }
            current = current.next;
        }
    }

    print(): void {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}