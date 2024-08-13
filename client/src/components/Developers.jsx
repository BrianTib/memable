import React from 'react';
import DeveloperCard from './DeveloperCard';

function Developers() {
    const developers = [
        {
            name: 'Brian Tiburcio',
            handle: 'brianTib',
            githubURL: 'https://github.com/BrianTib',
        },
        {
            name: 'Jongho Bae',
            handle: 'jonghoBae0218',
            githubURL: 'https://github.com/jonghoBae0218',
        },
        {
            name: 'Jacques Flores',
            handle: 'Jakostein97',
            githubURL: 'https://github.com/Jakostein97',
        },
        {
            name: 'Julia Eason',
            handle: 'jmeason',
            githubURL: 'https://github.com/jmeason',
        },
        {
            name: 'Careese Chow',
            handle: 'cowboytrex',
            githubURL: 'https://github.com/cowboytrex',
        },
    ];

    return (
        <section className="flex flex-col lg:flex-row justify-center gap-10 md:gap-16 lg:gap-24 items-center py-20 md:py-48 px-10 bg-gray-200">
            <div className="flex flex-col gap-3">
                <h3 className="text-5xl text-center font-semibold">Meet the Developers</h3>
                <p className="text-center">The talented team behind the Memable website.</p>
            </div>
            <div>
                <ul className="flex flex-col gap-4 md:grid md:grid-rows-3 lg:grid-rows-2 md:grid-flow-col md:gap-3">
                    {developers.map((developer, idx) => (
                        <DeveloperCard
                            key={idx}
                            name={developer.name}
                            handle={developer.handle}
                            githubURL={developer.githubURL}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Developers;
