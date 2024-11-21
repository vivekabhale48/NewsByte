import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const ApiContext = (props) => {
    const[loading, setLoading] = useState(false);
    const[data, setData] = useState([]);
    const[category, setCategory] = useState('');

    useEffect(()=>{
        getData();
    }, [])
    
    async function getData() {
        const data = await fetchDataFromApi();
        setData(data);
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            data,
            setData,
            setCategory
        }}>
            {props.children}
        </Context.Provider>
    )
}