var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 20;

// prints the name of every enemy
for(var singleEnemy = 0; singleEnemy < enemyNames.length; singleEnemy++)
console.log("these are your enemies: Enemy #" + (singleEnemy+1) +" "+ enemyNames[singleEnemy]);
// debugger

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask the player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

            // if player chooses to skip confirm and then stop the loop
            if(promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
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
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
        );

        // check enemy's health
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
            window.alert(playerName + " had died!");
            // leave while loop if player has died
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
    }
}

// fight each enemy by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if(playerHealth > 0){
        // let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round: " + (i + 1))

    // pick new enemy to fight based on the enemyNames array index
    var pickedEnemyName = enemyNames[i];

    // reset the enemy health before each fight
    enemyHealth = 50;

    // use the debugger to pause the script and see what is going on at this point of the game
    // debugger;

    // pass the pickedEnemyName value into the fight function. It will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else{
        window.alert("You've lost your robot in battle! GAME OVER!");
        break;
    }
}