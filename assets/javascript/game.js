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
        $("#Total").text(playerTotals);
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(targetNumber);
        console.log(targetNumber); 
    }
    reset();

    //var images = ["src","assets/images/crystal"]

    //var getRandomNumber = function () {
        //create random.Math.floor(Math.Random) for each crystal //
    //var targetNumber = Math.floor(Math.random() * 101) + 19;
        // $("#random-number").text(targetNumber);
        // console.log(targetNumber);

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
            "data-random": random,
            "id":'crystal' +i,
            // "style": 'background-image: url('
        });
        // crystal.css(
        //     'background-image', 'url("'+'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Diamond_Transparent_Clip_Art_Image.png?m=1507172105'+'")',
        //     // "background-size": "cover"
        // );

        $("#crystals").append(crystal);
        $('#crystal0').css(
            'background-image', 'url("'+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcYiogtAH0qyTkQoMLIq5mjSro_TBTWZe07n6C3WH4yBRbSCs'+'")',
            // "background-size": "cover"
            
        );
        $("#crystals").append(crystal);
        $('#crystal1').css(
            'background-image', 'url("'+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTST8ovwcFeZ-tDcKZS3EWJZdJtUEWWUlhquAwHRUIp0bwXNcfV'+'")',
            // "background-size": "cover"
            
        );
        $("#crystals").append(crystal);
        $('#crystal2').css(
            'background-image', 'url("'+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGT_DrhPa4siZ_Vws_gYlGQXDo4ttdmLDIg98m7tgw3seqJS2MEA'+'")',
            // "background-size": "cover"
            
        );
        $("#crystals").append(crystal);
        $('#crystal3').css(
            'background-image', 'url("'+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCMtLVYbUAl7aSv1HboUb87xYDSqYP-LPtXVoQe1Zx9U0b6MO'+'")',
            // "background-size": "cover"
            
        );


    //
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
            reset();
        } 
        
        else if (playerTotals >= targetNumber) {
            alert("You Lose")
            losses++;
            $("#losses").text(losses);
            reset();
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

  

