import React from 'react';
import { Link } from 'react-router-dom';
import InstructionCard from './InstructionCard';

const FeatureInstructions = () => {
    const features = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nobis sint beatae delectus eum mollitia repudiandae officiis earum ab nesciunt fugit natus, ea quo omnis odio, eaque iste. Velit, tempore.',
            image: '/images/placeholder.gif',
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nobis sint beatae delectus eum mollitia repudiandae officiis earum ab nesciunt fugit natus, ea quo omnis odio, eaque iste. Velit, tempore.',
            image: '/images/placeholder.gif',
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nobis sint beatae delectus eum mollitia repudiandae officiis earum ab nesciunt fugit natus, ea quo omnis odio, eaque iste. Velit, tempore.',
            image: '/images/placeholder.gif',
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nobis sint beatae delectus eum mollitia repudiandae officiis earum ab nesciunt fugit natus, ea quo omnis odio, eaque iste. Velit, tempore.',
            image: '/images/placeholder.gif',
        },
    ];

    return (
        <div>
            <ul className="flex flex-col items-center justify-center md:flex-wrap md:flex-row md:mx-auto md:w-fit gap-5">
                {features.map((feature, idx) => (
                    <InstructionCard key={idx} text={feature.text} image={feature.image} />
                ))}
            </ul>
        </div>
    );
};

export default FeatureInstructions;
