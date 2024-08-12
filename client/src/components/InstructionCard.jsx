import React from 'react';

const InstructionCard = ({ image, text }) => {
    return (
        <li className="flex justify-center items-center">
            <div className="mx-5 w-11/12 h-9/12 p-6 flex flex-col justify-center bg-zinc-300 rounded-xl items-center shadow-md dark:shadow-gray-800">
                <div className="mb-7">
                    <p className="text-center mt-2 ">{text}</p>
                </div>
                {/* <div className='h-auto max-w-full'>
                    <img
                        className=" rounded-xl shadow-md dark:shadow-gray-800"
                        src={image}
                        alt="Placeholder"
                    />
                </div> */}
                <div className="flex justify-center h-auto w-full">
                    <img className="w-full lg:w-9/12 rounded-xl" src={image} alt="Placeholder" />
                </div>
            </div>
        </li>
    );
};

export default InstructionCard;
