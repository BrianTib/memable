import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useThrottle } from '../hooks/useThrottle';
import { useQuery } from '@apollo/client';
import { QUERY_CURRENT_ROUND } from '../../util/queries';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';

import Auth from '../../util/auth';

function PlayerCard({ username, score }) {
    return (
        <div className="bg-white flex gap-2 items-center w-48 p-4 rounded-lg shadow-lg">
            <svg
                className="w-10 h-10 opacity-50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
            </svg>
            <div className="flex flex-col">
                <h2 className="font-semibold">{username}</h2>
                <p className="text-sm font-semibold">Score: {score}</p>
            </div>
        </div>
    );
}
function GiphySearchMosaic({ results, setSelectedGif }) {
    return (
        <div className="w-fit mb-2 flex justify-center overflow-x-auto md:flex-wrap gap-4">
            {results.map((r, i) => (
                <button
                    key={r.id}
                    className="w-32 h-32 bg-gray-300 rounded-xl shadow-lg overflow-hidden transition-transform duration-200 hover:ring-2 hover:ring-[#55883A] hover:ring-offset-2 hover:scale-110"
                    onClick={() => setSelectedGif(r)}>
                    <img
                        className="w-full h-full object-cover"
                        alt={r.title}
                        src={r.images.original.url}
                    />
                </button>
            ))}
        </div>
    );
}

export default function Session() {
    const [giphyResults, setGiphyResults] = useState([]);
    const [promptInput, setPromptInput] = useState('');
    const [selectedGif, setSelectedGif] = useState(null);
    const { sessionId } = useParams();

    const throttledGIFSearch = useThrottle(async () => {
        console.log('Searching for:', promptInput);
        const { data } = await axios.get(
            `https://api.giphy.com/v1/gifs/search?q=${promptInput}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`,
        );
        setGiphyResults(data?.data);
    }, 2000);

    const handleSetSelectedGIF = gif => {
        setSelectedGif(gif);
        setPromptInput('');
        setGiphyResults([]);
    };

    const { loading: roundDataLoading, data: { currentRound: roundData } = {} } = useQuery(
        QUERY_CURRENT_ROUND,
        {
            variables: { id: sessionId },
        },
    );

    if (roundDataLoading) {
        return <Loading />;
    }

    if (!roundData) {
        return <Error message="Unable to load the round data" />;
    }

    // console.log(roundData);

    return (
        <div className="relative bg-gray-200 min-h-full flex flex-col px-4 py-4 gap-4">
            <section className="flex w-full flex-wrap justify-between h-fit">
                <div className="flex items-center gap-4">
                    <button className="bg-white p-2 rounded-full shadow-lg">
                        <svg
                            className="w-8 h-8"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.75">
                                <path
                                    d="M18 6C18.3978 6 18.7794 6.15804 19.0607 6.43934C19.342 6.72064 19.5 7.10218 19.5 7.5V16.5H28.5C28.8978 16.5 29.2794 16.658 29.5607 16.9393C29.842 17.2206 30 17.6022 30 18C30 18.3978 29.842 18.7794 29.5607 19.0607C29.2794 19.342 28.8978 19.5 28.5 19.5H19.5V28.5C19.5 28.8978 19.342 29.2794 19.0607 29.5607C18.7794 29.842 18.3978 30 18 30C17.6022 30 17.2206 29.842 16.9393 29.5607C16.658 29.2794 16.5 28.8978 16.5 28.5V19.5H7.5C7.10218 19.5 6.72064 19.342 6.43934 19.0607C6.15804 18.7794 6 18.3978 6 18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H16.5V7.5C16.5 7.10218 16.658 6.72064 16.9393 6.43934C17.2206 6.15804 17.6022 6 18 6Z"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </button>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg">
                        Leave
                    </button>
                </div>

                {roundData.players.length > 0 && (
                    <div className="hidden md:flex gap-2 py-3 overflow-auto">
                        {roundData.players.map(player => {
                            const score =
                                roundData.responses.find(
                                    response => response.player._id.toString() === player._id,
                                )?.totalScore || 0;

                            return (
                                <PlayerCard
                                    key={player._id}
                                    username={player.username}
                                    score={score}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
            <section className="h-full flex flex-grow items-center justify-center">
                <div className="relative bg-white flex flex-col items-center w-fit md:w-3/12 font-bold text-center gap-1 px-8 py-12 rounded-lg shadow-lg">
                    <h6 className="absolute top-4 left-4 text-gray-500">Round 1/5</h6>
                    <h5 className="text-gray-700 text-2xl">
                        Time Left: <span className="text-red-500 font-bold">0:50</span>
                    </h5>
                    <h4 className="text-3xl text-[#55883A]">Prompt</h4>
                    <p className="text-gray-500 md:text-lg mt-4">{roundData?.prompt.text}</p>
                    {selectedGif && (
                        <>
                            <img
                                className="w-64 h-64 object-cover mt-4 rounded-lg mb-4"
                                src={selectedGif.images.original.url}
                                alt={selectedGif.title}
                            />
                            <button className="bg-[#55883A] w-fit text-white px-8 py-3 rounded-lg shadow-lg">
                                Submit
                            </button>
                        </>
                    )}
                </div>
            </section>
            <section className="md:px-12">
                {promptInput && giphyResults.length > 0 && (
                    <GiphySearchMosaic
                        results={giphyResults}
                        setSelectedGif={handleSetSelectedGIF}
                    />
                )}

                <form className="flex gap-4">
                    <input
                        className="bg-white w-full py-2 text-lg px-4 rounded-lg shadow-lg font-bold border-none focus:ring-2 focus:ring-[#55883A] focus:text-[#55883A]"
                        type="text"
                        onChange={e => {
                            setPromptInput(e.target.value);
                            throttledGIFSearch();
                        }}
                        value={promptInput}
                        placeholder="Search for a GIF"
                    />
                </form>
            </section>
        </div>
    );
}
