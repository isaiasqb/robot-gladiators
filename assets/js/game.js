var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// prints the name of every enemy
for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");
}

var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // ask the player if they want to fight or skip the ballte
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    console.log(promptFight)

    // if the player chooses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log( 
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " had died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
        );

        // check player's health
        if(playerHealth <= 0){
            window.alert(playerName + " has died.");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // if player chooses to skip the battle or enters nother value
    } else if(promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip the fight
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if YES (true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // substract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if NO (false), ask question again by running fight() again
        else {
            fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i])
}