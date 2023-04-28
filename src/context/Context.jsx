import { createContext } from "react";
import { useTabs, Tab } from "../hooks/Tabs";

const Context = createContext();

function UserProvider({children}){
    const {newTab} = useTabs()

    return (
        <Context.Provider value={{Tab, newTab}}>
            {children}
        </Context.Provider>
    )
}

export {
    UserProvider,
    Context
}