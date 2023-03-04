import React, { FC, useState, useEffect } from 'react';
export const AppContext = React.createContext<any>({});

const ContextProvider: FC = ({ children }: any) => {
    const [appState, setAppState] = useState<Object>();
    useEffect(() => {
        setAppState({ abc: "xyz" })
    }, [])

    return (
        <AppContext.Provider
            value={{
                appState,
                setAppState
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
