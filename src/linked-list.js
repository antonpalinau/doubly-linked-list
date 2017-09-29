const Node = require('./node');

class LinkedList {
    constructor() {
      this._tail;
      this._head;
      this.length = 0;
    }

    append(data) {
      if (this.length === 0){
        this._head  = new Node(data);
        this._tail = new Node(data);
        this.length++;
      } else if (this.length === 1) {
        this._tail = new Node(data);
        this._tail.next = this._head;
        this._head.prev = this._tail;
        this.length++;
      } else {
        var previousTail = this._tail;
        this._tail = new Node(data);
        this._tail.next = previousTail;
        previousTail.prev = this._tail;
        this.length++;
      }
      return this;
    }

    head() {
      if (this._head === null) {
        return null;
      } else {
        return this._head.data;
      }
    }

    tail() {
      if (this._tail === null){
        return null;
      } else {
        return this._tail.data;
      }
    }

    at(index) {
      var node = this._head;
      while (index > 0) {
        node = node.prev;
        index--;
      }
      return node.data;
    }

    insertAt(index, data) {
      var node = this._head;
      while (index > 0) {
        node = node.prev;
        index--;
      }
      node.data = data;
      return this;
    }

    isEmpty() {
      if (this.length === 0){
        return true;
      } else {
        return false;
      }
    }

    clear() {
      this._head = new Node();
      this._tail = new Node();
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      var node = this._head;
      while (index > 0) {
        node = node.prev;
        index--;
      }
      var previousNode = node.prev;
      var nextNode = node.next;
      if (previousNode) {
        previousNode.next  = nextNode;
      }
      if (nextNode) {
        nextNode.prev = previousNode;
      }
      return this;
    }

    reverse() {
      if (this.length >1) {
        var previosHead = this._head;
        this._head = this._tail;
        var node = this._head;
        for (let i = 0; i < this.length; i++) {
          var previousNext = node.next;
          node.next = node.prev;
          node.prev = previousNext;
          node = node.prev;
        }
        this._tail = previosHead;
      }
      return this;
    }

    indexOf(data) {
      let node = this._head;
      for (var i = 0; i < this.length; i++) {
        if (data === node.data)
          return i;
        node = node.prev;
      }
      return -1;
    }
}

module.exports = LinkedList;
