import { useEffect, useState } from "react";

//Custom hook to get the current window size and update it on window resize event
const useWindowsResize = () => {

    const [size, setSize] = useState(
        {
            width: window.innerWidth,
            height: window.innerHeight
        }
    );

    useEffect(() =>{

        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        //Mount
        window.addEventListener('resize', handleResize);

        return () => {
            //Unmount
            return window.removeEventListener('resize', handleResize);
        }
    },[])

    return size;
}

export default useWindowsResize;