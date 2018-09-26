//once the document has fully loaded all of the HTML is ready, run this function
$(document).ready(function () {

    //set variables//
    var targetNumber;
    var playerTotals = 0;
    //var numberOptions = [];
    var wins = 0;
    var losses = 0;
    //var crystalValue;



    //reset function//
    var reset = function () {
        playerTotals = 0;
        getRandomNumber();
    }

    //var getRandomNumber = function () {
        //create random.Math.floor(Math.Random) for each crystal //
    var targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#random-number").text(targetNumber);
        console.log(targetNumber);

    //};
    //getRandomNumber();

for (var i = 0; i < 4; i++){
        console.log("hello world");
        var random = Math.floor(Math.random() *12) + 1;
        console.log(random);
        var crystal = $("<div>");
        console.log(crystal);
        crystal.attr({
            "class":'crystal',
            "data-random": random
        });

        $("#crystals").append(crystal);
        
    
    }

    $(".crystal").on('click', function() {
        var number = parseInt($(this).attr('data-random'));
        playerTotals = playerTotals + number;
        console.log(playerTotals);
        $("#Total").text(playerTotals);
        $(this).text(number);

        if (playerTotals === targetNumber) {
            alert("You win")
            wins++;
            $("#wins").text(wins);
        } 
        
        else if (playerTotals >= targetNumber) {
            alert("You Lose")
            losses++;
            $("#losses").text(losses);
        }
    });


    

    });


    //* The random number shown at the start of the game should be between 19 - 120.

    //* Each crystal should have a random hidden value between 1 - 12.

    //update all crystal increments//
    //$(".Allcrystals").on("click",function(){
    //var crystalvalue = ($(this).attr("data-crystalvalue"))
    //}

    //generate a random target number
    // targetNumber = Math.floor(Math.random());
    // $("#random-number").text(targetNumber);


    //playerTotals +=crystalvalue;

  

