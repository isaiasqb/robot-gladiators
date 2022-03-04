var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Final RoBoss"];
var enemyHealth = 50;
var enemyAttack = 20;

// prints the name of every enemy and your initial stats
for(var singleEnemy = 0; singleEnemy < enemyNames.length; singleEnemy++)
window.alert("These are your enemies: Enemy #" + (singleEnemy+1) +" "+ enemyNames[singleEnemy]);
window.alert("You start with " +playerHealth+" points of health and " +playerMoney+" dollars.")
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

// function to start ne game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 25;
    playerMoney = 10;

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
        

            // if player is still alive and we are not at the last enemy at the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask player if they want to visit the shop
                var storeConfirm = window.confirm("The fight's over. You have " +playerHealth+" points of health and " +playerMoney+" dollars. Visit the SHOP before the next round?");

                // if yes (true) take them to the store
                if (storeConfirm){
                    shop();
                }
            }
        }
        // if player isn't alive, stop the game
        else{
            window.alert("You've lost your robot in battle! GAME OVER!");
            break;
        }
    } //end of for loop

    // after loop ends player is out of health or enemies to fight
    endGame();
};

// function to end the game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, You've survived! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your Robot in Battle");
    };

    // ask player if the'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame()
    } 
    else{
        window.alert("Thank you fir playing Robot Gladiators!. Come Back Soon!");
    }
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the shop? Please enter 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
        );
    
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if(playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                // tell the user how much money they have left
                window.alert("You now have "+playerMoney+" dollars left.");
            } else {
                window.alert("You don't have enough money!")
            }
            break;

        case "upgrade":
        case "UPGRADE":
            if(playerMoney >= 12) {
                window.alert("Upgrading player's attack by 15 for 12 dollars.");
                // increase attack and decrease money
                playerAttack = playerAttack + 15;
                playerMoney = playerMoney - 12;
                // tell the user how much money they have left
                window.alert("You now have "+playerMoney+" dollars left.");
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("leaving the store");
            // do nothing so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop again to force the player to pick up a valid Option
            shop();
            break;
    }

};

// start the game when page loads
startGame()

