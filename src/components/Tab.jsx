import { useContext, useState, useEffect } from 'react'
import styles from '../pages/Home.module.css'
import './tab.css'
import { Context } from '../context/Context'
import svgCross from '../public/assets/x.svg'

export default function Tab({indexx, check, type}){
    const {setIndex, setCheck, setType,tabs, attLocalTabs, index} = useContext(Context)
    const [active, setActive] = useState(false);
    let del = false
    let myPlace = tabs.indexOf(tabs.filter(i => indexx == i.index)[0])


    useEffect(() => {
        if (indexx == index) setActive(true)
        else setActive(false)
        if (index == 'DEL') {
            setIndex(tabs[myPlace]?.index ? tabs[myPlace]?.index : tabs[myPlace-1]?.index ? tabs[myPlace-1]?.index : '')
            setCheck(tabs[myPlace]?.check ? tabs[myPlace]?.check : tabs[myPlace-1]?.check ? tabs[myPlace-1]?.check : '')
            setType(tabs[myPlace]?.type ? tabs[myPlace]?.type : tabs[myPlace-1]?.type ? tabs[myPlace-1]?.type : '')
        }
    }, [index])

    function setInfos(e){
        if (del) {
            setIndex('DEL')
            localStorage.removeItem(indexx)
        } else {
            setCheck(check)
            setIndex(indexx)
            setType(type)
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
        <div title={indexx} onClick={setInfos} className={active ? 'containerTab active' : 'containerTab'} >
            <div className={styles.divNameTab}>
                <span>{indexx}</span> 
            </div>
            <div onClick={deleteTab} className={styles.containerTabDel}>
                <img src={svgCross} alt="" />
            </div>
        </div>
    )
}