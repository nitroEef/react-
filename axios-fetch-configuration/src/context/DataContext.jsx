import { createContext, useState, useEffect } from "react";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    return(
        <DataProvider.provide value= {{

        }}>
            {children}
            </DataProvider.provide>

    )
}
export default DataProvider