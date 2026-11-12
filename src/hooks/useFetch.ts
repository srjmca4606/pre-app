import { useState, useEffect } from 'react';
import type { Todo } from '../componants/Types';

const useFetch = (url: string) => {

    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async () => {
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