# robot-gladiators

During the game, players will coach their robot through a series of fights—gaining cash, attack power, and repairs along the way. The robot that survives with the most cash will be remembered in the browser's storage system!

As we work, we will learn how to do the following:

Communicate with the game player by using JavaScript functions.
Assign and manipulate data using JavaScript variables and operators.
Control the flow of the application by managing conditional statements.

In this first lesson, we'll use JavaScript to code a single round of Robot Gladiators. When we're done, the game will follow this sequence:

The game will prompt the player to name their robot.
The player's robot will be initialized with the following properties:
100 health points
10 attack points
10 money points
The player's opponent, Roborto, will be initialized with the following properties:
50 health points
12 attack points
The game will display "Welcome to Robot Gladiators!"
The game will prompt the player to either fight the round or skip it.
If the player chooses to skip:
A penalty of 10 money points will be deducted from the player's robot.
The game will end.
If the player chooses to fight:
The player's robot will attack Roborto, and the player-robot's attack points will be deducted from Roborto's health points.
The game will display Roborto's remaining health points.
Roborto will attack the player's robot, and Roberto's attack points will be deducted from the player's robot's health points.
The game will display the player-robot's remaining health points.
The game will end.
A good way to begin any project is by asking questions. Here are a few that you might ask yourself about Robot Gladiators:

We need to set up the files. Where do they go?
How do we make the browser prompt a player to fight or skip?
How do we store values in JavaScript, like health points and attack points?
There must be a way to do math in JavaScript. How similar is it to real-life math?
It's okay if you don't know the answers to these questions yet. Try searching the internet for some different approaches—this is something even experienced developers do every day!

There are many ways to approach this project, but this is how we'll do it:

Set up the project in GitHub. We'll create a new GitHub repository, issues, and branches. These are the basic steps for any new project.

Create the project files and structure. We'll set up the index.html and game.js file structure according to the Con Solo instructions.

Use JavaScript functions to display the game status to the player. JavaScript has some built-in functions that do this, and we'll also create our own functions to control when these messages appear.

Use JavaScript variables and operators to manage game data. We'll do a little math to keep track of robot health, player money, and other game values.

Make decisions using JavaScript conditions. For example, the game should allow a robot to fight if it still has health points, but not if its health points reach 0.

Allow the player to decide whether they would like to fight or skip the fight.