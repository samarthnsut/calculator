window.document
var zero = document.getElementById('zero')
var one=document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var nine = document.getElementById('nine')
var dec = document.getElementById('decimal')
let exp1=0;
let exp2=0;
let op=0
var isEqual=null;
var disp=document.getElementById('display')

zero.addEventListener('click',function(){
       if(isEqual){
           disp.innerHTML=""
           exp1=0;
           exp2=0;
           isEqual=false

       }
       console.log("clicked")

       disp.innerHTML+=zero.innerText
       

})
one.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=one.innerText

})
two.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=two.innerText;

})
three.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=three.innerText

})
four.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    disp.innerHTML+=four.innerText

})
five.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=five.innerText

})
six.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=six.innerText

})
seven.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=seven.innerText

})
eight.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=eight.innerText

})
nine.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")

    disp.innerHTML+=nine.innerText

})
dec.addEventListener('click',function(){
    if(isEqual){
        disp.innerHTML=""
        exp1=0;
        exp2=0;
        isEqual=false

    }
    console.log("clicked")
    
    disp.innerHTML+=dec.innerText

})
var clear=document.getElementById('clear')

clear.addEventListener('click',function(){
    var disp=document.getElementById('display');
    disp.innerText="";
})



     
     
 
var add=document.getElementById('add')
add.addEventListener('click',function(){
    
    op='+';
   exp1=parseFloat(disp.innerText)
   disp.innerText = '';
   console.log(exp1);
})
var sub=document.getElementById('sub');
sub.addEventListener('click',function(){
    op='-'
    exp1=parseFloat(disp.innerText)
    disp.innerText = '';
    console.log(exp1);
    
})
var mul=document.getElementById('multiply');
mul.addEventListener('click',function(){
    op='*';
    exp1=parseFloat(disp.innerText)
    disp.innerText = '';
    console.log(exp1);
})
var divide=document.getElementById('divide')
divide.addEventListener('click',function(){
    op='/'
    exp1=parseFloat(disp.innerText)
    disp.innerText = '';
    console.log(exp1);
})
var neg=document.getElementById('negitive')
neg.addEventListener('click',function(){
    exp1=parseFloat(disp.innerText)*-1
    disp.innerText=exp1;
})
var per=document.getElementById('percent')
per.addEventListener('click',function(){
    exp1=parseFloat(disp.innerText)/100
    disp.innerText=exp1;
})

;
var equal=document.getElementById('equal')
equal.addEventListener('click',function(){
    
    exp2=parseFloat(disp.innerText)
    console.log(exp2)
    let ans=0
    isEqual=true;

    switch(op){
        case '+':  ans=exp1+exp2;
                   console.log(ans);
                   disp.innerText=ans;
                   break;
        case '-':   ans=exp1-exp2;
                    console.log(ans)
                    disp.innerText=ans;
                    break;
        case '*':     ans=exp1*exp2;
                     console.log(ans);
                     disp.innerText=ans;
                     break;
        case '/':   if(exp2==0)
                    {
                        disp.innerText="ERROR!!!"
                        break;
                    } 
                    else{   
                     ans=exp1/exp2;
                    console.log(ans)  
                    disp.innerText=ans;
                    }
                    break;     
        }

        exp1=0;
        exp2=0;
})

