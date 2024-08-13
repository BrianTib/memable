import React from 'react';

const MatchesWonCard = () => {
    return (
        <div className=''>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-5 rounded shadow-md">
            <h3 className="text-xl text-black font-semibold mb-2">Matches Won: 5</h3>
            <ul >
                <li className='py-4 '>
                    <div className="bg-white w-96 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md">
                        <svg
                            className="w-10 h-10 opacity-50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
                        </svg>
                        <p className="flex-grow font-bold text-lg">Game Session 1</p>
                        <p className="font-bold"> Today 20:00</p>
                    </div>
                </li>
                <li className='pb-4'>
                    <div className="bg-white w-96 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md">
                        <svg
                            className="w-10 h-10 opacity-50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
                        </svg>
                        <p className="flex-grow font-bold text-lg">Game Session 2</p>
                        <p className="font-bold"> Today 12:00</p>
                    </div>
                </li>
                <li className='pb-4'>
                    <div className="bg-white w-96 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md">
                        <svg
                            className="w-10 h-10 opacity-50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
                        </svg>
                        <p className="flex-grow font-bold text-lg">Game Session 3</p>
                        <p className="font-bold"> Yesterday 8:00</p>
                    </div>
                </li>
                <li className='pb-4'>
                    <div className="bg-white w-96 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md">
                        <svg
                            className="w-10 h-10 opacity-50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
                        </svg>
                        <p className="flex-grow font-bold text-lg">Game Session 4</p>
                        <p className="font-bold"> 8/10/24 16:00</p>
                    </div>
                </li>
                <li className='pb-4'>
                    <div className="bg-white w-96 h-16 flex gap-5 rounded-lg items-center px-4 shadow-md">
                        <svg
                            className="w-10 h-10 opacity-50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
                        </svg>
                        <p className="flex-grow font-bold text-lg">Game Session 5</p>
                        <p className="font-bold"> 8/9/24 9:00</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default MatchesWonCard;
