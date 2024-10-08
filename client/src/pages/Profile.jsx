import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { prettyNumber } from '../../util/util';
import RecentActCard from '../components/RecentActCard';
import MatchesWonCard from '../components/MatchesWonCard';
import FriendsCard from '../components/FriendsCard';

export default function Page() {
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

                <div className="flex flex-col gap-5 w-full items-center md:pt-24 pt-16 px-5 mb-1">
                    <svg
                        className="w-10 h-10 opacity-50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
                    </svg>
                    <h3 className="text-white text-4xl md:text-5xl text-center">Profile</h3>
                </div>

                <div className="flex justify-center items-center m-5">
                    <div className="m-5">
                        <RecentActCard />
                    </div>

                    <div className="m-5">
                        <FriendsCard />
                    </div>

                    <div className="m-5">
                        <MatchesWonCard />
                    </div>
                </div>
            </section>
        </div>
    );
}
