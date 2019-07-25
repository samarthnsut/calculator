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


zero.addEventListener('click',function(){
       console.log("clicked")
       var disp=document.getElementById('display')
       disp.innerHTML+=zero.innerText
       

})
one.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=one.innerText

})
two.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=two.innerText;

})
three.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=three.innerText

})
four.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=four.innerText

})
five.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=five.innerText

})
six.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=six.innerText

})
seven.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=seven.innerText

})
eight.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=eight.innerText

})
nine.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=nine.innerText

})
dec.addEventListener('click',function(){
    console.log("clicked")
    var disp=document.getElementById('display')
    disp.innerHTML+=dec.innerText

})
var clear=document.getElementById('clear')

clear.addEventListener('click',function(){
    var disp=document.getElementById('display');
    disp.innerText="";
})
var disp=document.getElementById('display')
var equal=document.getElementById('equal')

     
     
  let exp1=0;
  let exp2=0;
  let op=0
var add=document.getElementById('add')
add.addEventListener('click',function(){
    op='+'
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

equal.addEventListener('click',function(){
    exp2=parseFloat(disp.innerText)
    let ans=exp1+exp2;
    disp.innerText=ans;
})

