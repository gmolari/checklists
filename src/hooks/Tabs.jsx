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

    function attLocalTabs(ans, index){
        for(const i in tabs){
            if (tabs[i]?.index == index) tabs[i].ans = ans
            return
        }

        // if (tabs) {
        //     localStorage.setItem('tabs', ans);
        // }
    }


    useEffect(attTabs, [])

    return {
        attLocalTabs,
        tabs
    }
}

export {
    useTabs,
}