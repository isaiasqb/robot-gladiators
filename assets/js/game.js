/** GAME FUNCTIONS **/ 

    // FUNCTION TO CREATE RANDOM NUMERIC VALUE
var randomNumber = function (min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var fightOrSkip = function(){
    // ask the player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT 💥 or SKIP ✔️ this battle? Enter FIGHT or SKIP to choose.");

    // conditional recurring function to prevent a FALSY value form being entered
    if (!promptFight) {
        window.alert("Please provide a valid answer!");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    // if player chooses to skip confirm and then stop the loop
    if(promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if YES (true) leave fight 
        // #####player should not be able to skip if they don't have anough money
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip ✔️ this fight. Goodbye!");
            // substract money from playerInfo.money for skipping. MAth.max assures that we don't display an amount lower than 0
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("Player Money: ", playerInfo.money);

            // return true if player want's to leave
            return true;
        }
    }
    return false;
}

    // FIGHT FUNCTION (with parameter "enemy" that retreives the enemyInfo name health and attack)
var fight = function(enemy) { 
    // keep track of who goes first with the flip of a coin
    var isPlayerTurn = true;

    // randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while(playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            // ask the player if they want to fight or skip with fightOrSkip function
            if(fightOrSkip()) {
                //if true, leave fight by breaking the loop
                break;
            };

            // GENERATES RANDOM DAMAGEd base on the player's attack
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            // REMOVES ENEMIY'S health, not letting it drop below 0
            enemy.health = Math.max(0, enemy.health - damage)
            console.log(playerInfo.name +" 🗡️ attacked "+ enemy.name +".");
            console.log(enemy.name +" now has "+ enemy.health + " health remaining");

            // Check enemy's health. If it has been defeated announce it and award player.
            if (enemy.health <= 0) {
                window.alert(enemy.name + ' has died! 💀');

                // award player, money for winnig
                playerInfo.money = playerInfo.money + 20;

                // leave while() lopp since enemy is death
                break;
            } /* else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        } */
        //Plater gets attacked firts
        } else {
            // remove PLAYER's health generate random damage value based on enemy's attack
            var damage = randomNumber(enemy.attack - 5, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(enemy.name + " 🗡️ attacked " + playerInfo.name + ".");
            console.log(playerInfo.name + " now has " + playerInfo.health + " health remaining");

            // check player's health
            if(playerInfo.health <= 0){
                window.alert(playerInfo.name + " had died! 💀");
                // leave while loop if player has died
                break;
            } /*else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            } */
        }
        //  switch tirn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
}


    // FUNCTION TO START A NEW GAME
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    // fight each enemy by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if(playerInfo.health > 0){
            // let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round: " + (i + 1));
            // pick new enemy to fight based on the enemyInfo array index
            var pickedEnemyObj = enemyInfo[i];

            // reset the enemy health before each fight
            pickedEnemyObj.health = randomNumber(50, 60);

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

    // FUNCTION TO END THE GAME
var endGame = function() {
    window.alert("The game has ended! Let's see how you did");

    // check localStorage for high score, if not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    } 

    // if a plaayer has more money than the high score, player has new highscore
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name+" no has the high score of "+ playerInfo.money)
    }
    else{
        alert(playerInfo.name+" did not beat the high score of "+ highScore +". Maybe next time!" )
    }


    /*// if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, You've survived! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your Robot in Battle");
    }; 
    */

    // ask player if the'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame()
    } else {
        window.alert("Thank you for playing Robot Gladiators!. Come Back Soon!");
    }
};

    // SHOP FUNCTION
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to 💊REFILL your health, ✨UPGRADE your attack or ↪️LEAVE the shop? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    
    // turning the answer form a strin into an integer
    shopOptionPrompt = parseInt(shopOptionPrompt);
    
    switch(shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("↪️ Leaving the store...");
            // do nothing so function will end
            break;

        default:
            window.alert("You didn't pick a valid option. Try again.");

            // call shop again to force the player to pick up a valid Option
            shop();
            break;
    }
};
/*** END gAME FUNCTIONS ***/

/*** GAME INFORMATION & VARIABLES ***/

// PLAYER INFORMATION

    //function to set player's robot name
var getPlayerName = function(){
    var name = "";
    while (name === "" || name === null ) {
        name = prompt("What is your robot's name?");
    } 

    window.alert("Your robot's name is: " + name );
    return name + "🦁"
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 20,
    money:10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 20;
    }, // coma! not semicolon.
    
    refillHealth: function() {
        if(this.money >= 7) {
            window.alert("💊Refilling " + playerInfo.name + "'s health by 20. Cost was $7 Dollars"); 
            this.health += 20;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
    }, // coma! not semicolon
    
    upgradeAttack: function() {
        if (this.money >= 7){
            window.alert("✨Upgrading " + playerInfo.name + "'s attack by 5. Cost was $12 Dollars")
            this.attack += 5;
            this.money -= 12;
        } else {
            window.alert("You don't have enough money!");        
        }
    }
};

// ENEMY INFORMATION
var enemyInfo = [
    {
        name: "🤖 Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "👾 Amy Android",
        attack: randomNumber(14, 18)
    },
    {
        name: "👹Robo Trumble",
        attack: randomNumber(18, 22)
    }
];
/*** GAME INFORMATION & VARIABLES ***/

    // PRESENTS the name of every enemy and your initial stats
    for (var singleEnemy = 0; singleEnemy < enemyInfo.length; singleEnemy++)
    console.log("These are your enemies: Enemy #" + (singleEnemy+1) +" "+ enemyInfo[singleEnemy].name);
    console.log("You start with " +playerInfo.health+" points of health and " +playerInfo.money+" dollars.")
    
    

/*** RUN THE GAME ***/
startGame()


    


