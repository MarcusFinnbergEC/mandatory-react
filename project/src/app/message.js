/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
  const gameMessage = {
    player1: "It is player 1's turn to play",
    player2: "It is player 2's turn to play",
    player1won: "Game over, the first player won",
    player2won: "Game over, the second player won",
    draw: "Game over, nobody won"};



  return (
    <h2>hej</h2>
  );
}
