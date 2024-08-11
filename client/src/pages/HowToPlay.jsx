import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { prettyNumber } from '../../util/util';

export default function Page() {
    const [topCount, setTopCount] = useState(10); // Default to Top 10

    const handleTopCountChange = event => {
        setTopCount(parseInt(event.target.value));
    };

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

                <div className="flex flex-col gap-5 w-full items-center md:pt-24 pt-16 px-5">
                    <h3 className="text-white text-4xl md:text-5xl text-center">How To Play</h3>
                                <p className="text-white text-center leading-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nobis sint beatae delectus eum mollitia repudiandae officiis earum ab nesciunt fugit natus, ea quo omnis odio, eaque iste. Velit, tempore.
                                </p>
                               
                                <img className="h-auto max-w-full rounded-lg shadow-xl dark:shadow-gray-800" src="/images/placeholder.gif" alt="Placeholder" />
                </div>
            </section>
        </div>
    );
}
