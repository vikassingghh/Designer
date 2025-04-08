import React from "react";
import {createContext, useState} from "react";

export const  Themestore = createContext(null);

const ThemeControler = ({children})=>{
    const [theme, settheme] = useState("light");

    return(
        <Themestore.Provider value={{theme, settheme}}>
            {children}
        </Themestore.Provider>
    )
}
export default ThemeControler;