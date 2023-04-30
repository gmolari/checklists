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
    const localTabs = localStorage.getItem('tabs')

    function attTabs(){
        if (localTabs){
            for(let i in localTabs){
                // setTabs((prevValue) => ({
                //     ...prevValue,
                //     [i]: cookies[i]
                // }))
                if (tabs[cookies[i]]) tabs[cookies[i]] = tabs[cookies[i]]
                else tabs.push({cookie: i, content: cookies[i]})
            }
        }
    }

    function attCookies(){
        for(let i in tabs) setCookies(i, tabs[i])
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
        attCookies,
        tabs
    }
}

export {
    useTabs,
    Tab
}