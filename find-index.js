// finds the index of element 
indexOf(element) 
{ 
    var count = 0; 
    var current = this.head; 
  
    // iterae over the list 
    while (current != null) { 
        // compare each element of the list 
        // with given element 
        if (current.element == = element) 
            return count; 
        count++; 
        current = current.next; 
    } 
  
    // not found 
    return -1; 
} 