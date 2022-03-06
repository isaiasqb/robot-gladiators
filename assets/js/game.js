var randomNumber = function (min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}


var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money:10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, // coma! not semicolon.
    
    refillHealth: function() {
        if(this.money >= 7) {
            window.alert("Refilling " + playerInfo.name + "'s health by 20. Cost was $7 Dollars"); 
            this.health += 20;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
    }, // coma! not semicolon
    
    upgradeAttack: function() {
        if (this.money >= 7){
            window.alert("Upgrading " + playerInfo.name + "'s attack by 5. Cost was $12 Dollars")
            this.attack += 5;
            this.money -= 12;
        } else {
            window.alert("You don't have enough money!");        
        }
    }
};


var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(16, 20)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(21, 25)
    },
    {
        name: "RoboBoss",
        attack: randomNumber(28, 32)
    }
];




// prints the name of every enemy and your initial stats
for (var singleEnemy = 0; singleEnemy < enemyInfo.length; singleEnemy++)
window.alert("These are your enemies: Enemy #" + (singleEnemy+1) +" "+ enemyInfo[singleEnemy].name);
window.alert("You start with " +playerInfo.health+" points of health and " +playerInfo.money+" dollars.")
// debugger

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {

    while(playerInfo.health > 0 && enemy.health > 0) {
        // ask the player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

            // if player chooses to skip confirm and then stop the loop
            if(promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
                // if yes (true) leave fight
                if (confirmSkip) {
                    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                    // substract money from playerInfo.money for skipping. MAth.max assures that we don't display an amount lower than 0
                    playerInfo.money = Math.max(0, playerInfo.money - 10);
                    console.log("Player Money: ", playerInfo.money)
                    break;
                }
            }

        // remove ENEMY's health generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 5, playerInfo.attack);
        // math max will display the highest value, like 0,  if the health drops below 0
        enemy.health = Math.max(0, enemy.health - damage)
        window.alert(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining"
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died');

            // award player, money for winnig
            playerInfo.money = playerInfo.money + 20;

            // leave while() lopp since enemy is death
            break;
        } 
        // else {
        //     window.alert(enemy.name + " still has " + enemy.health + " health left.");
        // }

        // remove PLAYER's health generate random damage value based on player's attack power
        var damage = randomNumber(enemy.attack - 5, enemy.attack);
        // math max will display the highest value, like 0,  if the health drops below 0
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        window.alert(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining"
        );

        // check player's health
        if(playerInfo.health <= 0){
            window.alert(playerInfo.name + " had died!");
            // leave while loop if player has died
            break;
        } 
        // else {
        //     window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        // } 
    }
}

// function to start new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    // fight each enemy by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if(playerInfo.health > 0){
            // let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round: " + (i + 1))

            // pick new enemy to fight based on the enemyInfo array index
            var pickedEnemyObj = enemyInfo[i];

            // reset the enemy health before each fight
            pickedEnemyObj.health = randomNumber(50, 60);

            // use the debugger to pause the script and see what is going on at this point of the game
            // debugger;

            // pass the pickedEnemyObj value into the fight function. It will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if player is still alive and we are not at the last enemy at the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask player if they want to visit the shop
                var storeConfirm = window.confirm("The fight's over. You have " +playerInfo.health+" points of health and " +playerInfo.money+" dollars. Visit the SHOP before the next round?");

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
    window.alert("The game has ended! Let's see how you did");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, You've survived! You now have a score of " + playerInfo.money + ".");
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
        window.alert("Thank you for playing Robot Gladiators!. Come Back Soon!");
    }
};

// shop fuction
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the shop? Please enter 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );
    
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store...");
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

// // prints 3/1416
// console.log(Math.PI);
// // rounds to the nbearest whole number
// console.log(Math.round(5.5));
// //prints the square root
// console.log(Math.sqrt(30))

