import React from 'react';
import { Link } from 'react-router-dom';
import FeatureIntroCard from './FeatureIntroCard';
import IconShakingHands from './icons/IconShakingHands';
import IconText from './icons/IconText';
import IconGIF from './icons/IconGIF';

const FeatureIntro = () => {
    const features = [
        {
            title: 'Join / Create a session',
            description: 'Join a session with friends or create your own session.',
            icon: IconShakingHands,
        },
        {
            title: 'Get a prompt',
            description: 'Each round you will get a random prompt to find the perfect GIF for',
            icon: IconText,
        },
        {
            title: 'Find a funny GIF',
            description: 'Use the text prompt to find a funny GIF that suits the prompt',
            icon: IconGIF,
        },
    ];

    return (
        <section className="my-5 flex flex-col space-y-5 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center">Create hilarious memes</h1>
            <p className="text-lg px-4 w-full md:w-1/2 text-center mt-4 mx-auto">
                Join friends in game sessions, captioning memes, finding funny GIFs, and gaining
                lots of points. Get started for free today!
            </p>
            <ul className="flex flex-col items-center justify-center md:flex-wrap md:flex-row md:mx-auto md:w-fit gap-5">
                {features.map((feature, idx) => (
                    <FeatureIntroCard
                        key={idx}
                        title={feature.title}
                        description={feature.description}
                        Icon={feature.icon}
                    />
                ))}

                <li>
                    <div className="w-72 h-44 p-6 flex flex-col bg-zinc-300 rounded-lg items-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.45 7.45 0 0 1-.982-3.172M9.497 14.25a7.45 7.45 0 0 0 .981-3.172M5.25 4.236q-1.473.215-2.916.52A6 6 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721A48 48 0 0 1 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.7 6.7 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46 46 0 0 1 2.916.52 6 6 0 0 1-5.395 4.972m0 0a6.7 6.7 0 0 1-2.749 1.35m0 0a6.8 6.8 0 0 1-3.044 0"
                                />
                            </svg>
                        </div>
                        <h3 className="text-center font-bold mt-2">Vote for a winner</h3>
                        <p className="text-center mt-2">
                            Give scores to your friend&apos;s memes and find out who&apos;s the
                            funniest
                        </p>
                    </div>
                </li>
            </ul>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                <Link
                    to="/login"
                    className="w-fit text-lg bg-black text-white py-2 px-8 rounded-lg">
                    Get Started
                </Link>
                <Link
                    to="/how-to-play"
                    className="w-fit text-lg bg-white text-black font-bold py-2 px-8 rounded-lg border-2 border-gray-400">
                    How to play
                </Link>
            </div>
        </section>
    );
};

export default FeatureIntro;
