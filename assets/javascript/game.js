
 // thoughts as Im researching:  in Jquery, can we select all 4 at once
// (cat, swan, horse, koala) that will allow 
//random value to be assigned to each individual one of them at the same time (within function)v
$(document).ready(function () {
        var startOrRestart = 0;
        var losses = 0;
        var wins = 0;
        //prior is the score before reset
        var yourScore = 0;
        //get random number 
        //empties out any value under the crystal for the crystals div
        //$(".crystals").empty();
        var images = [
                'assets/images/yellow.jpg',
                'assets/images/purple.jpg',
                'assets/images/red.jpg',
                'assets/images/green.jpg',

        ];
        startOrRestart = Math.floor(Math.random() * 102) + 19;
        $("#charlie").html('Match this number:' + startOrRestart);
        //for each crystal:
        for (var i = 0; i < 4; i++) {
                var animal = Math.floor(Math.random() * 12) + 1;
                console.log(i);
                //this will generate 4 divs with a "crystal" for classes to be further honed in css (or html)
                //the crysal clic k is a class I create myrself. I need to find out if I need to do something else++
                //tomorrow, print to console.log to see if code is working

                var crystal = $("<div>");
                crystal.attr({
                        "class": 'crystal',
                        "crystal": animal
                });
                crystal.css({
                        "background-image": "url('" + images[i] + "')",
                        "background-size": "cover"
                });
                //move the 4 random results into divs -crystal- (4) in html under dive with "crystals"class
                crystal.html(animal)

                $("#crystals").append(crystal);
                //$('#total').html('Your Total: ' + yourScore)
                //when the crystal is clicked upon it looks at the score sees if there is a win or loss. 
                // or if the added. Need document for event delegation so player will be able to click (listen) on other crystal once page
                //has been initally loaded
        }
                });
        // $(document).on('click', ".crystal", function () {
        //       var num = parseInt($(this).attr("Score"));//check with tutor to confirm this is just the writing of "Score" not your score variable
        //       yourScore += num;
        //        console.log(yourScore);//so I can see if its working
        //         
        //       if (yourScore > score) {
        //        losses++;
        //         $("#Losses").html("You Lose: " + losses);//chaeck and make sure "You win and score comes up"
        //         yourScore = 0;
        //      startOrRestart()////7;

        //}
        //        else if (yourScore === score) {
        //                 wins++;
        //                 $("#Wins").html("You win: " + wins);
         //                yourScore = 0;
         //                startOrRestart();
         //}};