# Crystal Collector

# How to Play
1. The computer will randomly generate a number between 19 and 120. This will change with every new round.
2. The computer will randmoly assign values to the four crystals shown on the screen between 1 and 12. This will change with every new round.
3. Click the crystals to determine the value of each crystal.
4. Try to get the current score to match the number to reach that is displayed. The player must match this number exactly with their current score in order to win the round. If the player exceeds the score displayed on the screen, they will lose the round.
5. Wins and losses are recorded at the end of each round. A new round will begin if the player either wins or loses the current round.

# Coding
1. Random number generation is provided by the Math.random() function. These random numbers are assigned using the gameStart() function.
2. Data is modified in the DOM via jQuery manipulation. Button press events are also monitored via jQuery.
3. After each press of the button, a function called checkScore() is run. This will check the current status of the game and see if a new round is required. 
4. Formatting executed through Bootstrap.
