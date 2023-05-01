import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

class Tab {
    constructor(index, name, content, type, check){
        this.type = type
        this.check = check
        this.index = index
        this.name = name
        this.content = content
    }
}

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

    function newTab(data){
        const cTab = new Tab(data.index, data.name, data.content)

        setTabs((prevValue) => ({
            ...prevValue,
        }))
    }

    return {
        newTab,
        attLocalTabs,
        tabs
    }
}

export {
    useTabs,
    Tab
}