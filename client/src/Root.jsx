import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx';
import Navbar from './components/Navbar.jsx';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

export default function Root() {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}
