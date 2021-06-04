let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let Add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#mul");
let divide=document.querySelector("#divi");
let dispresult=document.querySelector("#dispresult");

function addno(a,b)
{
  let sum=a+b;
  return sum;  

}

function subno(a,b)
{
  let sub1=a-b;
  return sub1;  

}

function mulno(a,b)
{
  let multiply=a*b;
  return multiply;  

}

function divno(a,b)
{
  let division=a/b;
  return division;  

}

Add.addEventListener('click', function (){
    
    let num_1 = parseInt(num1.value);
   let num_2 = parseInt(num2.value);
    let result=addno(num_1,num_2);
    dispresult.innerHTML=result;


});
mul.addEventListener('click', function (){
    
    let num_1 = parseInt(num1.value);
   let num_2 = parseInt(num2.value);
    let result=mulno(num_1,num_2);
    dispresult.innerHTML=result;


});
sub.addEventListener('click', function (){
    
    let num_1 = parseInt(num1.value);
   let num_2 = parseInt(num2.value);
    let result=subno(num_1,num_2);
    dispresult.innerHTML=result;


});
divide.addEventListener('click', function (){
    
    let num_1 = parseInt(num1.value);
   let num_2 = parseInt(num2.value);
    let result=divno(num_1,num_2);
    dispresult.innerHTML=result;


});