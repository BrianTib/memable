import React from 'react';
import { Link } from 'react-router-dom';
import Top3Leaderboard from './Top3Leaderboard';

function LeaderBoard() {
    return (
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
                <h3 className="text-white text-4xl md:text-5xl text-center">
                    Leaderboards and Top Memes
                </h3>
                <p className="text-white text-center md:w-2/4 leading-6">
                    Check out the leaderboards to see the top scores and the funniest memes of the
                    day. Compete with your friends, and see who can create the most hilarious memes!
                </p>
                <div className="flex flex-col md:flex-row gap-5">
                    <Link
                        to="/leaderboards"
                        className="w-fit text-lg bg-black text-white py-2 px-8 rounded-lg">
                        View Leaderboard
                    </Link>
                    <Link
                        to="/top-memes"
                        className="w-fit text-lg bg-white text-black font-bold py-2 px-8 rounded-lg">
                        View Top Memes
                    </Link>
                </div>
            </div>

            <div className="mt-10 font-bold">
                <h3 className="text-white text-3xl md:text-4xl text-center">Top #3</h3>

                <Top3Leaderboard />
            </div>
        </section>
    );
}

export default LeaderBoard;
