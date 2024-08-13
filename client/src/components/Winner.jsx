import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { prettyNumber } from '../../util/util';

function sessionGame() {
    const [players, setPlayers] = useState([
        { id: 1, name: "Alice", submittedMeme: "meme1", points: 0 },
        { id: 2, name: "Bob", submittedMeme: "meme2", points: 0 },
        { id: 3, name: "Charlie", submittedMeme: "meme3", points: 0 }
    ]);
  const [votes, setVotes] = useState({
      meme1: 2,
      meme2: 3,
      meme3: 1,
  });

    const [winner, setWinner] = useState(null);

    function pickWinner() {
    let maxVotes = 0;
    let winningMeme = null;

  for (let memeId in votes) {
      if (votes[memeId] > maxVotes) {
        maxVotes = votes[memeId];
        winningMeme = memeId;
      }
    }
}