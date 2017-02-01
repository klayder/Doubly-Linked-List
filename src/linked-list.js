const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}
    append(data) {
		var node = new Node (data); 
		if(!this.length){
		this.length = 1;	
		this._head = node;
		this._tail = node;	
		return this;
		}
		var TempTail = node;
		TempTail.prev = this._tail;
		this._tail.next = TempTail;
		this._tail = TempTail;
		this.length++;
	}
    
	head(data) {
		return this._head.data ;
	}
    
	tail(data) {
		return this._tail.data;	
	}
    
	at(index) {
		var temp = this._head, i =0;
		while(temp){
		if (i === index){return temp.data;}
		temp = temp.next;
		i++;
		}
 	}
    
	insertAt(index, data) {
		var temp = this._head, i=0;
		while(temp){
		if (i === index){ 
		temp.data=data;
		break;}
		temp = temp.next;
		i++;
		}
	}
    
	isEmpty() {
		if(this.length === 0){
			return true;
		}else{
			return false;
		}
	}
	
    clear() {
		this._tail.data = null;
		this._head.data = null;
		this.length = 0;
	}
    
	deleteAt(index) {
		var temp = this._head, i =0;
		while(temp){
		if (i === index){
			if(temp.prev) temp.prev.next=temp.next;
			if(temp.next) temp.next.prev=temp.prev;
			break;
		}
		temp = temp.next;
		i++;
		}
	}
    
	reverse() {
	    var tempNode = this._head, tempArrData = [];
        while (tempNode) {
            tempArrData.unshift(tempNode.data);
            tempNode = tempNode.next;
        }
        this.clear();
        var i = 0 , length = tempArrData.length;
       for (; i < length ; i++) {
            this.append(tempArrData[i]);
       }
       return this;
	}
		
	indexOf(data){
		var temp=this._head, i=0;
		while(temp){
		if(temp.data === data) {	return i;}
		temp=temp.next;
		i++;
		}
		return -1;}
}

module.exports = LinkedList;
