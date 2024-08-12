import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx';
import Navbar from './components/Navbar.jsx';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function Root() {
    return (
        <ApolloProvider client={client}>
            <div className="flex flex-col min-h-screen">
                <header>
                    <Navbar />
                </header>
                <main className="flex-grow w-full">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </main>
                <Footer />
            </div>
        </ApolloProvider>
    );
}
