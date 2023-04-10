import React, { createContext, useState } from "react";

export const ModoOscuroContext = createContext({});
const OscuroProvider = ( {children}) => {

    const [isModoOscuro, setIsModoOscuro]= useState(true);
    const state = { isModoOscuro, setIsModoOscuro};

    return (
        <ModoOscuroContext.Provider value={state}>
            {children}
        </ModoOscuroContext.Provider>
    )
}

export default OscuroProvider;
