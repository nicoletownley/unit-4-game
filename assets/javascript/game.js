// thoughts as Im researching:  in Jquery, can we select all 4 at once
// (cat, swan, horse, koala) that will allow 
//random value to be assigned to each individual one of them at the same time (within function)v

var score;
//get random number 
score = Math.floor(Math.random() * 102) + 19;

for (var i = 0; i < 4, i++) {
    var animal =Math.floor(Math.random() * 12) + 1;
    //this will generate 4 divs with a "crystal" for classes to be further honed in css (or html)
    //the crysal click is a class I create myrself. I need to find out if I need to do something else
    //tomorrow, print to console.log to see if code is working
    var crystal = $("<div>");
        crystal.attr({"class": 'crystal',"crystal click": animal
     });
     $(".crystals").append(crystal)
    //for each crystal