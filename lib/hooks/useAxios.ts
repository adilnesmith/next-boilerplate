import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { UseAxiosState } from "lib/@types/common"

const useAxios = <T>(url: string, options?: AxiosRequestConfig): UseAxiosState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios(url, options);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return { data, error, isLoading };
};

export default useAxios;
