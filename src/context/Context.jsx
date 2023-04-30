import { useEffect, useState } from "react";
import { createContext } from "react";
import { useTabs, Tab } from "../hooks/Tabs";

const Context = createContext();

function UserProvider({children}){
    const {newTab, tabs} = useTabs()
    const [type, setType] = useState("");
    const [check, setCheck] = useState("");
    const [ans, setAns] = useState({});

    useEffect(() => {
        
    }, [check])

    return (
        <Context.Provider 
        value={
            {
                Tab, 
                newTab, 
                tabs, 
                type, 
                check, 
                setType, 
                setCheck,
                ans,
                setAns
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {
    UserProvider,
    Context
}