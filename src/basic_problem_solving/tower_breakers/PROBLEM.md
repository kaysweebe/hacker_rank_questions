Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally. The rules of the game are as follows:

Initially there are `n` towers.
Each tower is of height `m`.
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y <= x  and y evenly divides x.
If the current player is unable to make a move, they lose the game.
Given the values of `n` and `m`, determine which player will win. If the first player wins, return `1`. Otherwise, return `2`.

Example. 

There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
- remove 3 pieces from a tower to leave 3 as 6 modulo 3 == 0 
- remove 5 pieces to leave 1

Let Player  remove . Now the towers are  and  units tall.

Player  matches the move. Now the towers are both  units tall.

Now Player  has only one move.

Player  removes  pieces leaving . Towers are  and  units tall.
Player  matches again. Towers are both  unit tall.

Player  has no move and loses. Return .