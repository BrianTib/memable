import React from 'react';
import { prettyNumber } from '../../util/util';

function Top3Leaderboard() {
    return (
        <ul className="flex flex-col gap-5 items-center my-5">
            <li>
                <LeaderboardCard name="John Doe" score={1234} />
            </li>
            <li>
                <LeaderboardCard name="John Doe" score={1234} />
            </li>
            <li>
                <LeaderboardCard name="John Doe" score={1234} />
            </li>
        </ul>
    );
}

function LeaderboardCard({ name, score }) {
    return (
        <div className="bg-white w-96 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md">
            <svg
                className="w-10 h-10 opacity-50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
            </svg>
            <p className="flex-grow font-bold text-lg">{name}</p>
            <p className="font-bold">{prettyNumber(score)} points</p>
        </div>
    );
}

export default Top3Leaderboard;
