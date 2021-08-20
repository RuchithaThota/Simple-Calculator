 let numbers = document.querySelectorAll(".number");
 let operators = document.querySelectorAll(".operator");
 let previousOperand = document.querySelector(".previous-operand");
 let currentOperand = document.querySelector(".current-operand");
 let allClear=document.querySelector("#AC");
 let del=document.querySelector("#DEL");
 let equalTo=document.querySelector("#equalTo");

 class Calculator{
     constructor(previousOperand,currentOperand){
     
    this.previousOperand=previousOperand;
    this.currentOperand=currentOperand;
    this.clear();
  }
  clear(){

    this.current='';
    this.previous='';
    this.operator=undefined;

  }
  delete(){
      this.current=this.current.toString().slice(0,-1); 
  }
  appendNumber(num){
      if(num=='.'&&this.current.includes('.')){
          return;
      }
      this.current=this.current.toString()+num.toString();
  }
  operation(operator){
    if(this.current=='')return;
    if(this.previous!=''){
        this.compute();
    }
    this.operator=operator;
    this.previous=this.current;
    this.current='';

  }
  compute(){
      let computation;
      let prev=parseFloat(this.previous);
      let curr=parseFloat(this.current);
      switch(this.operator){
          case '+': computation=prev+curr;
                     break;
           case '-': computation=prev-curr;
                     break;
        case 'x': computation=prev*curr;
                     break;
       case '/': computation=prev/curr;
                     break;
        case '%': computation=(prev/curr)*100;
                     break;
        default:return;
      }
      this.current=computation;
      this.previous='';
      this.operator=undefined;

  }
 
   updateDisplay(){

    this.currentOperand.innerText= this.current;
    if(this.operator!=null){
    this.previousOperand.innerText=`${this.previous} ${this.operator}`;
    }
    else{
        this.previousOperand.innerText=this.previous;
    }
  }

 }
 let c=new Calculator(previousOperand,currentOperand);

 allClear.addEventListener('click',()=>{
     c.clear();
     c.updateDisplay();
 })
 numbers.forEach(e=>{
     e.addEventListener('click',()=>{
        
         c.appendNumber(e.value);
         c.updateDisplay();
     })
 })
 operators.forEach(e=>{
    e.addEventListener('click',()=>{
       
        c.operation(e.value);
        c.updateDisplay();
    })
})
equalTo.addEventListener('click',()=>{
    c.compute();
    c.updateDisplay();
})
del.addEventListener('click',()=>{
  
    c.delete();
    c.updateDisplay();
})