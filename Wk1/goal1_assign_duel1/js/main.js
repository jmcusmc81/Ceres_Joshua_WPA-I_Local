/**
 Joshua Ceres
 Assignment: Goal 1: PWA1 Duel1
 August 4-8 2014

 **/

//self-executing function

(function(){
    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Zeus";
    var playerTwoName = "Sniper";

    //player damage (Dmg)
    var player1Dmg = 20;
    var player2Dmg = 20;

    //player health (Hp)
    var playerOneHp = 100;
    var playerTwoHp = 100;

    var round = 1;

    function fight(){
        console.log('in the fight function');

        alert(playerOneName +":"+ playerOneHp+" *START* "+playerTwoName +":"+ playerTwoHp);
        for(var i=0; i<10; i++){
            console.log(i);
        };
            winnerCheck()
    };

    function winnerCheck(){
        //code will go here
    };
   /*** The program gets started below ***/
    console.log('program stats');
    fight();

})();





