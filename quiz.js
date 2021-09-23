{
  var score=0;
}

function myFunction(){
  var x=document.getElementById("ques_one");
   x.style.display="block";
   document.getElementById("btn_start").style.display="none";
}

function myFirstQuestion(){

   document.getElementById("ques_one").style.display="none";
   var x=document.getElementById("ques_two");
    x.style.display="block";
}

function mySecondQuestion(){
   document.getElementById("ques_two").style.display="none";
   var x=document.getElementById("ques_three");
    x.style.display="block";
}

function myThirdQuestion(){
   document.getElementById("ques_three").style.display="none";
   var x=document.getElementById("ques_four");
    x.style.display="block";
}

function myFourthQuestion(){
   document.getElementById("ques_four").style.display="none";
   var x=document.getElementById("ques_five");
    x.style.display="block";
}

function onSubmit_one(){
  var rates = document.querySelector('input[name="ques1"]:checked').value;
  if(rates==="1"){
    score+=1;
  }
}

function onSubmit_two(){
  var rates = document.querySelector('input[name="ques2"]:checked').value;
  if(rates==="1"){
    score+=1;
  }
}

function onSubmit_three(){
  var rates = document.querySelector('input[name="ques3"]:checked').value;
  if(rates==="1"){
    score+=1;
  }
}

function onSubmit_four(){
  var rates = document.querySelector('input[name="ques4"]:checked').value;
  if(rates==="1"){
    score+=1;
  }
}


function onSubmit_five(){
  var rates = document.querySelector('input[name="ques5"]:checked').value;
  if(rates==="1"){
    score+=1;
  }
   document.getElementById("ques_five").style.display="none";
}

function final_Ans(){
  var x=document.getElementById("res");
   x.style.display="block";
  document.getElementById("result").innerHTML="You scored: "+score +" out of 5!";

}


function display_Result(){
  document.getElementById("res").style.display="none";
  var x=document.getElementById("final_Result");
  x.style.display="block";
  document.getElementById("home_page").style.display="block";
}
