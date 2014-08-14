/**
 Joshua Ceres
 Assignment: Develop : PWA1 Duel#2
 August 14-15 2014

 **/

//self-executing function

(function(){ //Beginning of the coding for the fight sequence
    console.log("FIGHT!!!");

    //Players Name, Damage, and Health
    var playerOneName = ["Zeus", 20, 100];          // Player One [ "Name", Damage, and Health ]---- Changed to an Array
    var playerTwoName = ["Sniper", 20, 100];        // Player Two [ "Name", Damage, and Health ]---- Changed to an Array
    //Array format reduces all the lines of code I had written to one simple line of code.

    /**
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
**/
    var round = 0; //Round Starts at Zero

    function fight() { //Fight Function that contains both players Minimum Damage, Health, and Round Results.
        console.log('in the fight function');

        alert(playerOneName + ":" + playerOneHp + " **START** " + playerTwoName + ":" + playerTwoHp);//Start of the Match between both Players
        for (var i = 0; i < 10; i++) { // For Loop which allows code to repeatedly execute
            //random formula is -Math.floor(Math.random() * (max - min) + min);
            var minDmg1 = player1Dmg * .5; //Variable minDmg1(Minimum Damage) for Player One that times their Max Damage by half or .5
            var minDmg2 = player2Dmg * .5; //Variable minDmg2(Minimum Damage) for Player Two that times their Max Damage by half or .5
            var f1 = Math.floor(Math.random() * (player1Dmg - minDmg1) + minDmg1); //Math formula that randomizes both players damage
            var f2 = Math.floor(Math.random() * (player2Dmg - minDmg2) + minDmg2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage

            playerOneHp -= f1; //Takes the results of the random damage and deducts it from both players health
            playerTwoHp -= f2;
            console.log(playerOneName + ":" + playerOneHp + " **START** " + playerTwoName + ":" + playerTwoHp);

            var results = winnerCheck(); //Results from winnerCheck Function.
            console.log(results);

            if (results === "no winner"){ //if there is no winner the code continues to run and the round increases
                round++;//Increases round
                alert(playerOneName + ":" + playerOneHp + " **ROUND "+round+" OVER** " + playerTwoName + ":" + playerTwoHp);//Updates user wit results
            }else{
                alert(results);
                break
            };

            //console.log(playerOneHp);
            //console.log(playerTwoHp);
        };

    };
     function winnerCheck(){ //Function that checks for a winner by comparing it to the number Zero. If one hits zero the other Player wins, and if both hit zero then both players die.
        console.log("in winnerCheck FN");

        var result="no winner"; //No winner if neither Player's Health hits zero, code repeats

        if(playerOneHp<1 && playerTwoHp <1){ //If both players hit zero at the same time then both die
            result = "You Both Die";
        }else if(playerOneHp<1){ //If player one Health hits zero first then player two wins
            result=playerTwoName+ " WINS!!!"
        }else if(playerTwoHp<1){  //If Player twos health hits zero first then player one wins
            result=playerOneName+ " WINS!!!"
        };

        return result; //Returns the results

    };


   /*** The program gets started below ***/
    console.log('program starts');
    fight();

})();





