import React from 'react';
import { Link } from 'react-router-dom';
import FeatureIntroCard from './FeatureIntroCard';
import IconShakingHands from './icons/IconShakingHands';
import IconText from './icons/IconText';
import IconGIF from './icons/IconGIF';
import IconTrophy from './icons/IconTrophy';

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
        {
            title: 'Vote for a winner',
            description: "Give scores to your friend's memes and find out who's the funniest",
            icon: IconTrophy,
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
