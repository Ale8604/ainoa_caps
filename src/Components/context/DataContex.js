import { Children, createContext, useState, useEffect } from "react";
import axios from "axios";
export const dataContex = createContext();

const DataProvider = ({Children}) => {
    const [data, setdata] = useState([])

    useEffect(()=>{
        axios('info.json').then((res)=> setdata(res.data));
    },[])
    return(
        <dataContex.Provider value={data}>
            {Children}
        </dataContex.Provider>
    )
}

export default DataProvider;