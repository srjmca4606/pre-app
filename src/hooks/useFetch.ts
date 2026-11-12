import { useState, useEffect } from 'react';

//making it generic
const useFetch = <T>(url: string) => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);                
            const jsonResp = await response.json();
            setData(jsonResp);
            setLoading(false);
        }

        fetchData();
    },[]);


    return { data, loading };

}
export default useFetch;