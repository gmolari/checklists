import { useEffect, useState } from "react";
import { createContext } from "react";
import { useTabs } from "../hooks/Tabs";
import { useCookies } from "react-cookie";

const Context = createContext();


function UserProvider({children}){
    const {tabs, attLocalTabs} = useTabs()
    const [type, setType] = useState("");
    const [check, setCheck] = useState("");
    const [cookies, setCookies] = useCookies();
    const [index, setIndex] = useState(cookies.cIndex ? cookies.cIndex : '');
    const localTabs = JSON.parse(localStorage.getItem('tabs'))
    const [ans, setAns] = useState(index ? cookies[index] : '');
    const [infos, setInfos] = useState();

    function verifyLocalTabs(data){
        if ( !localTabs || localTabs.length < 1){
            setCheck('')
        }
    }

    useEffect(() => {
        if ( !localTabs || localTabs.length <= 0){
            setCheck('')
        }
        // setInfos(cookies[index])
    }, [])

    // useEffect(() => {
    //     index || index == '' ? setCookies('cIndex', index) : ''
    // }, [index])

    useEffect(() => {
        type || type == '' ? setCookies('cType', type) : ''
        // setInfos(cookies[index])
    }, [type])

    useEffect(() => {
        check || check == '' ? setCookies('cCheck', check) : ''
        // setInfos(cookies[index])
    }, [check])

    return (
        <Context.Provider 
        value={
            {
                tabs, 
                type, 
                check, 
                setType, 
                setCheck,
                ans,
                setAns,
                index,
                setIndex,
                attLocalTabs,
                verifyLocalTabs,
                infos,
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