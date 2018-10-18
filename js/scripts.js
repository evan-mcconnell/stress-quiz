// Biz Logic
var stressSignInput = 0;
var healthSignInput = 0;
var copeMethodInput = 0;
var totalStress = 0;

function totalSign(num1, num2){
  return num1 + num2;
};

function getCope(cope, stress) {
  if (cope > 3) {
    console.log("You are coping!");
  } else {
    if (stress > 5) {
      console.log("Get some help please");
    } else if (stress > 2) {
      console.log("You're doing alright");
    } else {
      console.log("You're doing great!");
    };
  };
};

// var totalSign = stressSignInput + healthSignInput;


// User Logic
$(document).ready(function(){
  $("form#stressSurvey").submit(function(event){
    event.preventDefault();
    totalStress = 0;
    stressSignInput = 0;
    healthSignInput = 0;

    $("input:checkbox[name=stressSign]:checked").each(function(){
      stressSignInput += 1;
    });

    $("input:checkbox[name=healthSign]:checked").each(function(){
      healthSignInput += 1;
    });

    $("input:checkbox[name=copeMethod]:checked").each(function(){
      copeMethodInput += 1;
    });

    totalStress = totalSign(stressSignInput, healthSignInput);

    getCope(copeMethodInput, totalStress);
    // getAnswer(totalStress);

    // $("#fun-responses").show();
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    //
    // $('form#stressSurvey').fadeOut();
    // $("#answerBox").fadeIn();
console.log(totalStress);
  });
});
