import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { prettyNumber } from '../../util/util';
import Session from '../pages/Session'

function SessionWinner() {
    const [players, setPlayers] = useState([
        { id: 1, name: 'Alice', submittedMeme: 'meme1', points: 0 },
        { id: 2, name: 'Bob', submittedMeme: 'meme2', points: 0 },
        { id: 3, name: 'Charlie', submittedMeme: 'meme3', points: 0 },
    ]);

    const [votes, setVotes] = useState({
        meme1: 2,
        meme2: 3,
        meme3: 3,
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

        const winners = players.filter(
            player =>
                player.submittedMeme === winningMeme && votes[player.submittedMeme] === maxVotes,
        );

        const updatedPlayers = players.map(player => {
            if (votes[player.submittedMeme] === maxVotes) {
                return { ...player, points: player.points + (winners.length > 1 ? 1 : 3) };
            } else {
                return { ...player, points: player.points + 0 };
            }
        });

        setPlayers(updatedPlayers);
        setWinner(winners);
    }

    return (
        <div>
            <section className="bg-[#55883A] relative py-10">
                <svg
                    viewBox="0 0 1440 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    className="absolute top-0 bg-transparent">
                    <path
                        d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
                        fill="#fff"></path>
                </svg>
                <h1 className="text-4xl md:text-5xl text-center">Memable Game</h1>

                <button onClick={pickWinner}>End Round & Pick Winner</button>

               
            </section>
        </div>
    );
}

export default SessionWinner;
