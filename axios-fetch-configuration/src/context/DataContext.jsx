import { createContext, useState, useEffect } from "react";
import { format } from "date-fns";
// import api from "./api/post";
// import useWindowSize from "./hooks/useWindowSize";
// import useAxiosFetch from "./hooks/useAxiosFetch";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    return(
        <DataContext.Provider value= {{

        }}>
            {children}
            </DataContext.Provider>

    )
}
export default DataContext