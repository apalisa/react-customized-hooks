import { useState, useEffect } from 'react';

interface FetchOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}

interface FetchResult<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

function useFetch<T>(url: string, options?: FetchOptions): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, error, loading };
}

export default useFetch;
