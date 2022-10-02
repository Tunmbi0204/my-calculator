var screen = document.getElementById('screen');
var txt = document.getElementById('text');   
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var times = document.getElementById('times'); 
var modulus = document.getElementById('modulus'); 
var dot = document.getElementById('dot'); 
var clear = document.getElementById('clear'); 
var ans = document.getElementById('ans');

         

   one.onclick = ()=>{
      screen.value += '1'
   } 

   two.onclick = ()=>{

    screen.value += '2'
     }

   three.onclick = ()=>{
    screen.value += '3'
   }

   four.onclick = ()=>{
    screen.value += '4'
   } 

    five.onclick = ()=>{
    screen.value += '5'
   }

    six.onclick = ()=>{
    screen.value += '6'
   }

    seven.onclick = ()=>{
    screen.value += '7'
   }  

    eight.onclick = ()=>{
    screen.value += '8'
   }  

    nine.onclick = ()=>{
    screen.value += '9'
   } 

   zero.onclick = ()=>{
    screen.value += '0'
   }  

   plus.onclick = ()=>{
    screen.value += '+'
   }

   minus.onclick = ()=>{
    screen.value += '-'
   } 

   divide.onclick = ()=>{
    screen.value += '/'
   }  

   times.onclick = ()=>{
    screen.value += '*'
   }  

   clear.onclick = ()=>{
      screen.value = ''
   }  

     modulus.onclick = ()=>{
      screen.value += '%'
   }   

     dot.onclick = ()=>{
      screen.value += '.'; 
   } 

   ans.onclick = ()=>{ 
       
     if(screen.value != ''){
      screen.value = eval(screen.value)
     } 

     else{
       screen.value = '0'
     }

   }  
