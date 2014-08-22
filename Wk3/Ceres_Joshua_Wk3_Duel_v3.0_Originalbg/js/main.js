/**
 Joshua Ceres
 Assignment: Develop : PWA1 Duel#3
 August 22 2014

 **/

//self-executing function

(function(){ //Beginning of the coding for the fight sequence
    console.log("FIGHT!!!");
    /******---------Week 3 Code-----------*******/
        //DOM pieces to grab HTML tags
    var fighter1_txt = document.querySelector("#kabal").querySelector("p"); //Use # sign for querySelector nad no # sign for get ElementbyID
    var fighter2_txt = document.querySelector("#kratos").querySelector("p"); //Use # sign for querySelector nad no # sign for get ElementbyID
    var round_txt = document.querySelector("h5"); //Pull in text between html tags
    var button = document.getElementById("fight_btn"); //Pull in Main button that starts the game.

    console.log();

    //Click Event
    button.addEventListener("click", fight, false);

    //Objects for my fighters

   var fighters = [
       {
           name:"Kabal",   //index0.name or index[0] with object-key "name" = Kabal
           damage:20,      //index0.damage
           health:100      //index0.health
       },
       {
           name:"Kratos",  //index1.name or index[1] with object-key "name = Kratos
           damage:20,      //index1,damage
           health:100      //index1.health

       }];

    var round = 0; //Round Starts at Zero

    //DOM innerHTML text for the top of the HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON on Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    /******---------Fight Function-----------*******/
//**  Fight Function.
    function fight() { //Fight Function that contains both players Minimum Damage, Health, and Round Results.
        console.log('in the fight function');
        /******---------Week 3 Code-----------*******/
        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        //Math formula for determining damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);  //Fighter 1 damage
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);  //Fighter 2 damage

        //players inflict the damage generated above
        fighters[0].health -= f1;
        fighters[1].health -= f2;
        console.log(fighters[0].health, fighters[1].health);

        //check for winner
        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "Round #" + round + " Results:"; // Round number plus results
        round++;  //Increases round
        if (result = "no winner") {
            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        } else {
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //Disable the button - need the below if using addEvenListener
            button.removeEventListener("click", fight, false);
            //button disabled = true;

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
        }
    }

    function winnerCheck() {
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health < 1) {
            result = "You Both Die - GAME OVER!";
        }else if(fighters[0].health < 1){
            result = fighters[1].name + " WINS!!!"
        }else if(fighters)
    }


        /******---------Week 1 Code-----------*******/
        /*
         Original Code for Week 1 before converted to Array Format

         //player name
         var playerOneName = "Zeus"; //Player One Name
         var playerTwoName = "Sniper"; //Player Two Name

         //player damage (Dmg)
         var player1Dmg = 20; //Player One Damage
         var player2Dmg = 20; //Player Two Damage

         //player health (Hp)
         var playerOneHp = 100; //Player Ones Health is 100
         var playerTwoHp = 100; //Player Twos Health is 100
*/
         /******---------Week 2 Code-----------*******/
             /*
    //Players Name, Damage, and Health
    var playerOne = ["Zeus", 20, 100];          // Player One [ "Name", Damage, and Health ]---- Changed to an Array
    var playerTwo = ["Sniper", 20, 100];        // Player Two [ "Name", Damage, and Health ]---- Changed to an Array
    //Array format reduces all the lines of code I had written to one simple line of code.
    */


        //New Alert with Array Index
        /******---------Week 2 Code-----------*******/
        //alert(playerOne[0] + ":" + playerOne[2] + " **START** " + playerTwo[0] + ":" + playerTwo[2]);//Start of the Match between both Players
        //Changed alert code to match the change to the Array playerOne and playerTwo.

        /******---------Week 1 Code-----------*******/
        //alert(playerOneName + ":" + playerOneHp + " **START** " + playerTwoName + ":" + playerTwoHp); ---- Old Code from Week 1

            //for (var i = 0; i < 10; i++) { // For Loop which allows code to repeatedly execute
            //random formula is -Math.floor(Math.random() * (max - min) + min);

            /******---------Week 1 Code-----------*******/
            //var minDmg1 = player1Dmg * .5; --- Old Code from Week 1, updated below with correct array index
            //var minDmg2 = player2Dmg * .5; --- Old Code from Week 1, updated below with correct array index

            /******---------Week 2 Code-----------*******/
            //var minDmg1 = playerOne[1] * .5; //Variable minDmg1(Minimum Damage) for Player One that times their Max Damage by half or .5
            //var minDmg2 = playerTwo[1] * .5; //Variable minDmg2(Minimum Damage) for Player Two that times their Max Damage by half or .5

            //Math formula that randomizes both players damage
            /******---------Week 2 Code-----------*******/
            //var f1 = Math.floor(Math.random() * (playerOne[1] - minDmg1) + minDmg1); //New Code written with proper Array Index referring to player ones Damage
            //var f2 = Math.floor(Math.random() * (playerTwo[1] - minDmg2) + minDmg2); //New Code written with proper Array Index referring to player twos damage.

            /******---------Week 1 Code-----------*******/
           //var f1 = Math.floor(Math.random() * (player1Dmg - minDmg1) + minDmg1); --- Old code that has been updated above from Week 1
           //var f2 = Math.floor(Math.random() * (player2Dmg - minDmg2) + minDmg2); --- Old code that has been updated above from Week 1

            //console.log(f1);
            //console.log(f2);
            /******---------Week 2 Code-----------*******/
            //inflict damage to players Health
            //playerOne[2] -= f1; //Takes the results of the random damage and deducts it from both players health
            //playerTwo[2] -= f2;
            //Updated Code with Array Index for player Health---Week 2

            /******---------Week 1 Code-----------*******/
           // playerOneHp -= f1; --- Old Code from Week1 that has been updated above to fit the Array Index
           // playerTwoHp -= f2; --- Old Code from Week1 that has been updated above to fit the Array Index

            // Updated Console print with proper Array Index
            // Week 2
            //console.log(playerOne[0] + ":" + playerOne[2] + " **START** " + playerTwo[0] + ":" + playerTwo[2]);

            /******---------Week 1 Code-----------*******/
            //console.log(playerOneName + ":" + playerOneHp + " **START** " + playerTwoName + ":" + playerTwoHp); --- Old Code from Week 1
/*
            var results = winnerCheck(); //Results from winnerCheck Function.
            console.log(results);

            if (results === "no winner"){ //if there is no winner the code continues to run and the round increases
                round++;//Increases round
                // Updated alert to function with the change to the array using the proper Index---Week 2
                alert(playerOne[0] + ":" + playerOne[2] + " **ROUND "+round+" OVER** " + playerTwo[0] + ":" + playerTwo[2]);

*/
                /******---------Week 1 Code-----------*******/
                // Old code from week 1 that has been changed to an array index.
                // alert(playerOneName + ":" + playerOneHp + " **ROUND "+round+" OVER** " + playerTwoName + ":" + playerTwoHp);//Updates user wit results
/*
            }else{
                alert(results);
                break
            };

            //console.log(playerOneHp);
            //console.log(playerTwoHp);
        };

    };
*/

             /******---------Week 1 and 2 Code-----------*******/
            /******---------Winner Check Function-----------*******/
             /*
     function winnerCheck(){ //Function that checks for a winner by comparing it to the number Zero. If one hits zero the other Player wins, and if both hit zero then both players die.
        console.log("in winnerCheck FN");

        var result="no winner"; //No winner if neither Player's Health hits zero, code repeats
        //Updated Code with proper name and index for array.
        // Week 2
        if(playerOne[2]<1 && playerTwo[2] <1){ //If both players hit zero at the same time then both die
            result = "You Both Die";

        }else if(playerOne[2]<1){ //If player one Health hits zero first then player two wins
            result=playerTwo[0]+ " WINS!!!"
        }else if(playerTwo[2]<1){  //If Player twos health hits zero first then player one wins
            result=playerOne[0]+ " WINS!!!"
        };

        return result; //Returns the results

    };

    */

    /******---------Week 1 Code-----------*******/
    //Old Code from Week 1 using the old variables
/*
    if(playerOneHp<1 && playerTwoHp <1){

    }else if(playerOneHp<1){ //If player one Health hits zero first then player two wins
    result=playerTwoName+ " WINS!!!"

    }else if(playerTwoHp<1){  //If Player twos health hits zero first then player one wins
    result=playerOneName+ " WINS!!!"
};
  */

   /*** The program gets started below ***/
    console.log('program starts');
    fight();

})();

/***
                                            ----- Week 2 Notes ----

// Week 2 Results were good. When I ran the code after finishing I was getting an error after *** START *** where
// the alert would come up NaN where the Name should of been. The HP was not changing either.
// I found on lines 68 and 69 had teh wrong Index of [ 0 ].
// playerOne[0] -= f1; --- Wrong Index
// playerTwo[0] -= f1; --- Wrong Index

// playerOne[2] -= f1; --- Correct Index

 ***/