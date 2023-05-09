import { useContext, useState, useEffect } from 'react'
import styles from '../pages/Home.module.css'
import './tab.css'
import { Context } from '../context/Context'
import { useCookies } from 'react-cookie'
import svgCross from '../public/assets/x.svg'

export default function Tab({indexx, check, type}){
    const {setIndex, setCheck, setType,tabs, attLocalTabs, index, deleteCookie} = useContext(Context)
    const [cookies, setCookies, removeCookie] = useCookies()
    const [active, setActive] = useState(false);
    let del = false

    useEffect(() => {
        if (indexx == index) setActive(true)
        else setActive(false)
    }, [index])

    function setInfos(e){
        setCheck(check)
        setIndex(indexx)
        setType(type) 
        if (del) {
            deleteCookie(indexx)
            localStorage.removeItem(indexx)
        }  
        del = false
        if (tabs.length <= 0) {
            setIndex('')
        };
    }

    function deleteTab(){
        const item = tabs.filter(item => item.index == indexx)[0]
        const localItem = tabs.indexOf(item)
        tabs.splice(localItem, 1)        
        attLocalTabs();
        del = true
    }

    return (
        <div onClick={setInfos} className={active ? 'containerTab active' : 'containerTab'} >
            <div className={styles.divNameTab}>
                {
                    indexx
                }
            </div>
            <div onClick={deleteTab} className={styles.containerTabDel}>
                <img src={svgCross} alt="" />
            </div>
        </div>
    )
}