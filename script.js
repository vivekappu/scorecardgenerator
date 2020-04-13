// You can add your codes here 
var Name=document.querySelector("input");
var Class=document.querySelector("#class");
var rollnum=document.querySelector("#rollNo");
var mark1=document.querySelector("#mark1");
var mark2=document.querySelector("#mark2");
var mark3=document.querySelector("#mark3");
var button=document.querySelector("button");
var scorecard=document.querySelector("#scorecard");
 function isValidData(){
    var arr=[Name,Class,rollnum,mark1,mark2,mark3];
   for(i=0;i<arr.length;i++){
       if(arr[i].value.length<=0){
       return false;
       }
   }
    
   return true;
}
function validMark(){
    if(mark1.value<=100 && mark2.value<=100 && mark3.value<=100){
        return true;
    }
    return false;
}
function determineColor(percentage){
if(percentage<=40){
    return "red";
}
else if(percentage>40 && percentage<70)
{
    return "green";
}
else{
    return "white";
}
}
function generateProgressCard(){
   if(isValidData() ){
       if(validMark()){
    var addclass=document.querySelector(".class");
    var addname=document.querySelector(".name");
    var addpercentage=document.querySelector(".percentage");
    addclass.innerText=Class.value;
    addname.innerText=Name.value;
    var percentage=(Number(mark1.value)+Number(mark2.value)+Number(mark3.value))/300;

    addpercentage.innerText=percentage*100+"%";
    scorecard.style.display="block";
    var css=document.querySelectorAll(".color");
    
    for(var i=0;i<css.length;i++){
        css[i].style.color=determineColor(percentage*100)
    }
    document.getElementById("form").style.display="none";
       }
       else{
           alert("enter valid marks");
       }
   }
   else {
       alert("please fill the form")
   }
}
button.addEventListener("click",generateProgressCard);