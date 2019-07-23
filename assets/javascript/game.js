// thoughts as Im researching:  in Jquery, can we select all 4 at once
// (cat, swan, horse, koala) that will allow 
//random value to be assigned to each individual one of them at the same time (within function)v
 
var score
//get random number 
var start = function () {
 //empties out each crystal under crystals div
$(".crystals").empty();
score = Math.floor(Math.random() * 102) + 19;
$("#charlie").html('Match this number:'+ score);
//for each crystal:
for (var i=0; i < 4; i++) {
    var animal =  Math.floor(Math.random() * 12) + 1;
    //this will generate 4 divs with a "crystal" for classes to be further honed in css (or html)
    //the crysal clic k is a class I create myrself. I need to find out if I need to do something else
    //tomorrow, print to console.log to see if code is working
    
    var crystal = $("<div>");
        crystal.attr({"class": 'crystal',"crystal click": animal
     });
     //move the 4 random results into divs -crystal- (4) in html under dive with "crystals"class
     crystal.html (animal)
     $(".crystals").append(crystal);
        }

startOrRestart ();
$(".crystal").on('click', funtion () {
        var num =parseInt($this.attr(score))

}