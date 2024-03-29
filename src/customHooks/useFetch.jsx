import { useState, useEffect } from 'react';

const URL = process.env.REACT_APP_URL;

export const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const peticion = endpoint ? `${URL}/${endpoint}` : URL;
            try {
                const info = await fetch(peticion);
                const response = await info.json();
                //console.log('response', response);
                setData(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, [endpoint]);

    return { data, loading, error };
};
