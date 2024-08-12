import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Hook for throttling a callback function.
 * Throttling is a technique used to limit the rate at which a function is invoked.
 * It ensures that the callback is invoked at most once within every specified delay interval.
 *
 * @param {Function} callback The callback function to be throttled.
 * @param {number} [delay=100] The minimum delay in milliseconds between invocations of the callback.
 * @returns {Function} A throttled version of the callback function.
 */
export function useThrottle(callback, delay = 100) {
    const [lastExecutedTimestamp, setLastExecutedTimestamp] = useState(0);
    const timeoutRef = useRef(null);
    const callbackRef = useRef(callback);

    // Update the callback ref when the callback changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const throttledCallback = useCallback(
        (...args) => {
            const now = Date.now();
            if (now - lastExecutedTimestamp >= delay) {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                setLastExecutedTimestamp(now);
                callbackRef.current(...args);
            } else if (!timeoutRef.current) {
                timeoutRef.current = setTimeout(
                    () => {
                        setLastExecutedTimestamp(Date.now());
                        callbackRef.current(...args);
                        timeoutRef.current = null;
                    },
                    delay - (now - lastExecutedTimestamp),
                );
            }
        },
        [delay, lastExecutedTimestamp],
    );

    // Clean up the timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return throttledCallback;
}
