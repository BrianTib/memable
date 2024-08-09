import React from 'react';

export default function Page() {
    return (
        <div className="px-4">
            <section className="my-5 flex flex-col space-y-5">
                <h1 className="text-3xl md:text-5xl font-bold text-center">
                    Create hilarious memes
                </h1>
                <p className="text-lg px-4 w-full md:w-1/2 text-center mt-4 mx-auto">
                    Join friends in game sessions, captioning memes, finding funny GIFs, and gaining
                    lots of points. Get started for free today!
                </p>
                <ul className="flex flex-col items-center justify-center md:flex-wrap md:flex-row md:mx-auto md:w-fit gap-5">
                    <li>
                        <div className="w-72 h-44 p-6 flex flex-col bg-zinc-300 rounded-lg items-center">
                            <div>
                                <svg
                                    className="w-10 h-10"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 3a5.4 5.4 0 0 1-1.902 1.178c-.748.132-2.818-.828-3.838.152-.17.17-.38.34-.6.51-.48-.21-1.22-.53-1.76-.84S3 3 3 3L0 6.5s.74 1 1.2 1.66c.3.44.67 1.11.91 1.56l-.34.4a.88.88 0 0 0 .15 1 .83.83 0 0 0 1.002-.002.62.62 0 0 0 .077.881 1 1 0 0 0 1.006-.002.806.806 0 0 0-.003 1.005 1.01 1.01 0 0 0 .892-.114.82.82 0 0 0 .187.912 1.1 1.1 0 0 0 1.054-.092l.516-.467c.472.47 1.123.761 1.842.761l.061-.001a1.31 1.31 0 0 0 1.094-.791c.146.056.312.094.488.094.236 0 .455-.068.64-.185.585-.387.445-.687.445-.687a1.07 1.07 0 0 0 1.229-.279.996.996 0 0 0 .138-1.215.04.04 0 0 0 .021.005c.421 0 .787-.232.978-.574a1.56 1.56 0 0 0-.191-1.48l.003.005c.82-.16.79-.57 1.19-1.17a4.7 4.7 0 0 1 1.387-1.208zm-.05 7.06c-.44.44-.78.25-1.53-.32S9.18 8.1 9.18 8.1c.061.305.202.57.401.781.319.359 1.269 1.179 1.719 1.599.28.26 1 .78.58 1.18s-.75 0-1.44-.56-2.23-1.94-2.23-1.94l-.002.059c0 .258.104.491.272.661.17.2 1.12 1.12 1.52 1.54s.75.67.41 1-1.03-.19-1.41-.58c-.59-.57-1.76-1.63-1.76-1.63l-.001.053c0 .284.098.544.263.75.288.378.848.868 1.188 1.248s.54.7 0 1-1.34-.44-1.69-.8v-.002a.4.4 0 0 0-.1-.269.9.9 0 0 0-.906-.188A.61.61 0 0 0 6 11.1a.754.754 0 0 0-.912.001.61.61 0 0 0-.085-.95 1 1 0 0 0-1.174.08.66.66 0 0 0-.068-.911 1 1 0 0 0-1.186-.128L1.91 8.069c-.46-.73-1-1.49-1-1.49l2.28-2.77s.81.5 1.48.88c.33.19.9.44 1.33.64-.68.51-1.25 1-1.08 1.34a1.83 1.83 0 0 0 2.087.036 2.4 2.4 0 0 1 1.343-.403c.347 0 .677.072.976.203.554.374 1.574 1.294 2.504 1.874 1.17.85 1.4 1.4 1.12 1.68z" />
                                </svg>
                            </div>
                            <h3 className="text-center font-bold mt-2">Join / Create a session</h3>
                            <p className="text-center mt-2">
                                Join a session with friends or create your own session.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="w-72 h-44 p-6 flex flex-col bg-zinc-300 rounded-lg items-center">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000"
                                    className="w-10 h-10">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-center font-bold mt-2">Get a prompt</h3>
                            <p className="text-center mt-2">
                                Each round you will get a random prompt to find the perfect GIF for
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="w-72 h-44 p-6 flex flex-col bg-zinc-300 rounded-lg items-center">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304s2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-center font-bold mt-2">Find a funny GIF</h3>
                            <p className="text-center mt-2">
                                Use the text prompt to find a funny GIF that suits the prompt
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="w-72 h-44 p-6 flex flex-col bg-zinc-300 rounded-lg items-center">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-10 h-10">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.45 7.45 0 0 1-.982-3.172M9.497 14.25a7.45 7.45 0 0 0 .981-3.172M5.25 4.236q-1.473.215-2.916.52A6 6 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721A48 48 0 0 1 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.7 6.7 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46 46 0 0 1 2.916.52 6 6 0 0 1-5.395 4.972m0 0a6.7 6.7 0 0 1-2.749 1.35m0 0a6.8 6.8 0 0 1-3.044 0"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-center font-bold mt-2">Vote for a winner</h3>
                            <p className="text-center mt-2">
                                Give scores to your friend’s memes and find out who’s the funniest
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section>World</section>
            <section></section>
            <section></section>
        </div>
    );
}
