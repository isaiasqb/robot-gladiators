var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this;
console.log(playerName, playerHealth, playerAttack)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Substract the value of "playerAttack" from "enemyHealth" and use that value to update "enemyHealth" variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it woprked.
    console.log( 
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // substract the value of "enemyAttack" from "playerHealth" and use that value to update "playeHealth" variable
    playerHealth = playerHealth - enemyAttack

    // log the resultimg message to the console so we know thqt it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
    );

    // check player's health
    if(playerHealth <= 0){
        window.alert(playerName + " has died.")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
};

fight();