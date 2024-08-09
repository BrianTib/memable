import React from 'react';

const FeatureIntroCard = ({ Icon, title, description }) => {
    return (
        <li>
            <div className="w-72 h-44 p-6 flex flex-col bg-zinc-300 rounded-lg items-center">
                <div>
                    <Icon />
                </div>
                <h3 className="text-center font-bold mt-2">{title}</h3>
                <p className="text-center mt-2">
                    Join a session with friends or create your own session.
                </p>
            </div>
        </li>
    );
};

export default FeatureIntroCard;
