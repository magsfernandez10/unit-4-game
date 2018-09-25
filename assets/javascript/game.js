
var targetNumber = 50;
var counter = 0;
var numberOptions = [10,11, 3,5];

var increment = numberOptions[Math.round(Math.random())];
//create a global crystal variable using crystal class///

//create random.Math.floor(Math.Random) for each crystal //


for (var i=0; i< numberOptions.length; i++){
    var imageAllcrystals = $("<img>");
    imageAllcrystals.attr("data-crystalvalue", numberOptions[i]);
}

//update all crystal increments//
$(".Allcrystals").on("click",function(){
    var crystalvalue = ($(this).attr("data-crystalvalue"));


counter +=crystalvalue;

if(counter === targetNumber){
//you win//

}

else if (counter >= targetNumber){
    //you lose//

}

$("#number-to-guess").text(targetNumber);
$("#random-number").text(random);

});


