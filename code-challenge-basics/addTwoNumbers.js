class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length === 0 ){
        return "empty"
    }
        return this.items.pop()
    }
    peek(){
        if(this.items.length === 0){return null}
        return this.items[this.items.length-1]
    }
}
var addTwoNumbers = function(l1, l2) {
    console.log(l1)
    let stack = new Stack();
    let result = new ListNode();
    let temp;
    
    while(l1.next !== null){
        console.log('we in!')
        temp = l1.val + l2.val
        stack.push(temp);
        l1 = l1.next;
        l2 = l2.next;        
    }
    
    result.val = stack.pop()
    
    while(stack.peek() !== null){
        temp = stack.pop()
        result.next = new ListNode(temp)
    }
    return result;
};
