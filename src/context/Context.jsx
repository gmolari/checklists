import { useEffect, useState } from "react";
import { createContext } from "react";
import { useTabs, Tab } from "../hooks/Tabs";
import { useCookies } from "react-cookie";

const Context = createContext();


function UserProvider({children}){
    const {newTab, tabs, attLocalTabs} = useTabs()
    const [type, setType] = useState("");
    const [check, setCheck] = useState("");
    const [index, setIndex] = useState();
    const [ans, setAns] = useState({});
    const [cookies, setCookies] = useCookies();
    const localTabs = JSON.parse(localStorage.getItem('tabs'))

    useEffect(() => {
        if ( !localTabs || localTabs.length <= 0){
            console.log(localTabs)
            setType('')
            setCheck('')
            setCookies('cCheck', '')
            setCookies('cType', '')
            setCookies('cIndex', '')
        }
        if (!index) setIndex(cookies.cIndex);
        console.log('CONTEXT FIRST')
    }, [])

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
                setAns,
                index,
                setIndex,
                attLocalTabs
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