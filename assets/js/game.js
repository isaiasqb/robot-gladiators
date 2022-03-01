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
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }

};

fight();