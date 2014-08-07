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

    var round = 0;

    function fight() {
        console.log('in the fight function');

        alert(playerOneName + ":" + playerOneHp + " **START** " + playerTwoName + ":" + playerTwoHp);
        for (var i = 0; i < 10; i++) {
            //random formula is -Math.floor(Math.random() * (max - min) + min);
            var minDmg1 = player1Dmg * .5;
            var minDmg2 = player2Dmg * .5;
            var f1 = Math.floor(Math.random() * (player1Dmg - minDmg1) + minDmg1);
            var f2 = Math.floor(Math.random() * (player2Dmg - minDmg2) + minDmg2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage

            playerOneHp -= f1;
            playerTwoHp -= f2;
            console.log(playerOneName + ":" + playerOneHp + " **START** " + playerTwoName + ":" + playerTwoHp);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName + ":" + playerOneHp + " **ROUND "+round+" OVER** " + playerTwoName + ":" + playerTwoHp);
            }else{
                alert(results);
                break
            };

            //console.log(playerOneHp);
            //console.log(playerTwoHp);
        };

    };
     function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if(playerOneHp<1 && playerTwoHp <1){
            result = "You Both Die";
        }else if(playerOneHp<1){
            result=playerTwoName+ " WINS!!!"
        }else if(playerTwoHp<1){
            result=playerOneName+ " WINS!!!"
        };

        return result;

    };


   /*** The program gets started below ***/
    console.log('program starts');
    fight();

})();





