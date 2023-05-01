import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

function useTabs() {
    const [cookies, setCookies] = useCookies();
    const [tabs, setTabs] = useState([]);
    const localTabs = JSON.parse(localStorage.getItem('tabs'))


    function attTabs(){
        if (localTabs){
            setTabs(localTabs)
        }
    }

    function attLocalTabs(){
        if (tabs) {
            localStorage.setItem('tabs', JSON.stringify(tabs))
        }
    }


    useEffect(attTabs, [])

    return {
        attTabs,
        attLocalTabs,
        tabs
    }
}

export {
    useTabs,
}