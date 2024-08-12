import { useState, useCallback, useEffect } from 'react';

/**
 * Hook for debouncing a callback function.
 * Debouncing is a technique used to limit the rate at which a function is invoked.
 * It ensures that the callback is only executed after a specified delay since the last invocation.
 *
 * @param callback The callback function to be debounced.
 * @param delay The delay in milliseconds before invoking the callback after the last call.
 * @returns A debounced version of the callback function.
 **/
export function useDebounce(callback, delay = 100) {
    const [timeoutId, setTimeoutId] = useState(null);

    const debouncedCallback = useCallback(
        (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            const newTimeoutId = setTimeout(() => {
                callback(...args);
            }, delay);

            setTimeoutId(newTimeoutId);
        },
        [callback, delay, setTimeoutId, timeoutId],
    );

    // Cleanup function to clear the timeout on unmount or when the callback or delay changes
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return debouncedCallback;
}
