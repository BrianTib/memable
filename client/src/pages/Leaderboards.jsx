import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { prettyNumber } from '../../util/util';

export default function Page() {
    const [topCount, setTopCount] = useState(10); // Default to Top 10

    const handleTopCountChange = (event) => {
        setTopCount(parseInt(event.target.value));
    };

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

                <div className="flex flex-col gap-5 w-full items-center md:pt-24 pt-16 px-5">
                    <h3 className="text-white text-4xl md:text-5xl text-center">Leaderboard</h3>
                    <p className="text-white text-center md:w-2/4 leading-6">
                        Check out the leaderboards to see the top scores! Compete with your friends,
                        and see who can create the most hilarious memes!
                    </p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <select
                            value={topCount}
                            onChange={handleTopCountChange}
                            className="w-fit text-lg bg-black text-white py-2 px-8 rounded-lg">
                            <option value={10}>View Top 10</option>
                            <option value={20}>View Top 20</option>
                            <option value={50}>View Top 50</option>
                            <option value={100}>View Top 100</option>
                        </select>
                    </div>
                </div>

                <div className="mt-10 font-bold">
                    <h3 className="text-white text-3xl md:text-4xl text-center">Top #{topCount}</h3>

                    <TopLeaderboard count={topCount} />
                </div>
            </section>
        </div>
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

// In the future this should fetch information from the server
function TopLeaderboard({ count }) {
    // Sample data for demonstration
    const leaderboardData = Array.from({ length: 100 }, (_, index) => ({
        name: `User ${index + 1}`,
        score: 1000 - index * 10, // Sample score
    }));

    return (
        <ul className="flex flex-col gap-5 items-center my-5">
            {leaderboardData.slice(0, count).map((user, index) => (
                <li key={index}>
                    <LeaderboardCard name={user.name} score={user.score} />
                </li>
            ))}
        </ul>
    );
}
