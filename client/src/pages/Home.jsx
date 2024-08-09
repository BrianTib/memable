import React from 'react';
import { Link } from 'react-router-dom';
import { prettyNumber } from '../../util/util';
import FeatureIntro from '../components/FeatureIntro';

export default function Page() {
    return (
        <div>
            <FeatureIntro />
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
                        Check out the leaderboards to see the top scores and the funniest memes of
                        the day. Compete with your friends, and see who can create the most
                        hilarious memes!
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
            <section className="flex flex-col lg:flex-row justify-center gap-10 md:gap-16 lg:gap-24 items-center py-20 md:py-48 px-10 bg-gray-200">
                <div className="flex flex-col gap-3">
                    <h3 className="text-5xl text-center font-semibold">Meet the Developers</h3>
                    <p className="text-center">The talented team behind the Memable website.</p>
                </div>
                <div>
                    <ul className="flex flex-col gap-4 md:grid md:grid-rows-3 lg:grid-rows-2 md:grid-flow-col md:gap-3">
                        <li>
                            <DeveloperCard
                                name="Brian Tiburcio"
                                handle="brianTib"
                                githubURL="https://github.com/BrianTib"
                            />
                        </li>
                        <li>
                            <DeveloperCard
                                name="Jongho Bae"
                                handle="jonghoBae0218"
                                githubURL="https://github.com/jonghoBae0218"
                            />
                        </li>
                        <li>
                            <DeveloperCard
                                name="Jacques Flores"
                                handle="Jakostein97"
                                githubURL="https://github.com/Jakostein97"
                            />
                        </li>
                        <li>
                            <DeveloperCard
                                name="Julia Eason"
                                handle="jmeason"
                                githubURL="https://github.com/jmeason"
                            />
                        </li>
                        <li>
                            <DeveloperCard
                                name="Careese Chow"
                                handle="cowboytrex"
                                githubURL="https://github.com/cowboytrex"
                            />
                        </li>
                    </ul>
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

function DeveloperCard({ name, handle, githubURL }) {
    return (
        <a
            href={githubURL}
            className="bg-white w-64 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md cursor-pointer"
            target="_blank">
            <svg
                className="w-10 h-10 opacity-50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
            </svg>
            <div>
                <p className="text-lg font-semibold">{name}</p>
                <p className="font-semibold text-gray-600">@{handle}</p>
            </div>
        </a>
    );
}