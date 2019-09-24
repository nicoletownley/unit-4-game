$(document).ready(function () {
        var startOrRestart = 0;
        var losses = 0;
        var wins = 0;
        //prior is the score before reset
        var yourScore = 0;
        //get random number 
        //empties out any value under the crystal for the crystals div

        var images = [
                'assets/images/yellow.jpg',
                'assets/images/purple.jpg',
                'assets/images/red.jpg',
                'assets/images/green.jpg',

        ];
        function reset() {
                startOrRestart = Math.floor(Math.random() * 102) + 19;
                $("#charlie").html('Match this random number:' + startOrRestart);
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
                                "transform": animal
                        });
                        crystal.css({
                                "background-image": "url('" + images[i] + "')",
                                "background-size": "cover"
                        });
                        //move the 4 random results into divs -crystal- (4) in html under dive with "crystals"class
                        crystal.html(animal)

                        $("#crystals").append(crystal);

                        //when the crystal is clicked upon it looks at the score sees if there is a win or loss. 
                        // or if the added. Need document for event delegation so player will be able to click (listen) on other crystal once page
                        //has been initally loaded
                }
                $(".crystal").on("click", function () {
                        var num = $(this).attr('transform');
                        console.log(num);
                        asher(parseInt(num));
                        $('#total').html('Your Total: ' + yourScore);
                        checkLoss();

                });
        }
        function asher(num) {
                yourScore += num;
                console.log(yourScore);

        }
        reset();
        function checkLoss() {
                if (yourScore > startOrRestart) {
                        losses++;
                        $("#losses").html("You Lose: " + losses);//chaeck and make sure "You win and score comes up"
                        //     alert("You Lose"); 
                        yourScore = 0;
                        console.log("You lost");

                        $("#charlie").html('Match this number:' + startOrRestart);
                        $(".crystal").empty();
                        $("#total").empty();
                }

                else if (yourScore === startOrRestart) {
                        wins++;
                        $("#wins").html("You win: " + wins);
                        yourScore = 0;
                        startOrRestart = Math.floor(Math.random() * 102) + 19;
                        $("#charlie").html('Match this number:' + startOrRestart);
                        $(".crystal").empty();
                        $("#total").empty();
                }
                
                }



        
        //

        //

        // //function reset() {
        // //       random = Math.floor(Math.random() * 102 + 19);
        //         console.log(random);
        //         $("#numberToGet").text(random);
        //         var num1 = Math.floor(Math.random() * 12 + 1);
        //         var num2 = Math.floor(Math.random() * 12 + 1);
        //         var num3 = Math.floor(Math.random() * 12 + 1);
        //         var num4 = Math.floor(Math.random() * 12 + 1);
        //         userTotal = 0;
        //         $("#score").text(userTotal);
        // }
        //    
        // }
})

