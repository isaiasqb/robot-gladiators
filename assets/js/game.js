var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// // prints the name of every enemy
// for(var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index.");
// }

var fight = function(enemyName) {
    // repeat and execute as long as the enemy is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask the player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

            // if player chooses to skip confirm and then stop the loop
            if(promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip the fight
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
                // if yes (true) leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    // substract money from playerMoney for skipping
                    playerMoney = playerMoney - 10;
                    console.log("Player Money: ", playerMoney)
                    break;
                }
            }

        // remove enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + ' has died');
            // award player, money for winnig
            playerMoney = playerMoney + 20;
            // leave while() lopp since enemy is death
            break;
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}