import React from 'react';

const InstructionCard = ({ image, text }) => {
    return (
        <li>
            <div className="max-w-full h-auto p-6 flex flex-col bg-zinc-300 rounded-xl items-center">
                <div>
                <img
                        className="h-auto max-w-full rounded-lg shadow-xl dark:shadow-gray-800"
                        src={image}
                        alt="Placeholder"
                    />

                </div>
                <p className="text-center mt-2">{text}</p>
            </div>
        </li>
    );
};

export default InstructionCard;
