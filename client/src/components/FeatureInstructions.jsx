import React from 'react';
import { Link } from 'react-router-dom';
import InstructionCard from './InstructionCard';

const FeatureInstructions = () => {
    const features = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nobis sint beatae delectus eum mollitia repudiandae officiis earum ab nesciunt fugit natus, ea quo omnis odio, eaque iste. Velit, tempore.',
            image: 'Join a session with friends or create your own session.',
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

export default FeatureInstructions;