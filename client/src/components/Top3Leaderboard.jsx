import React from 'react';
import LeaderboardCard from './LeaderboardCard';

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

export default Top3Leaderboard;
