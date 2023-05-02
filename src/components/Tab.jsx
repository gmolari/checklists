import { useContext } from 'react'
import styles from '../pages/Home.module.css'
import { Context } from '../context/Context'
import { useCookies } from 'react-cookie'
import svgCross from '../public/assets/x.svg'

export default function Tab({index, check, type}){
    const {setIndex, setCheck, setType,tabs, attLocalTabs, verifyLocalTabs} = useContext(Context)
    const [cookies, setCookies, removeCookie] = useCookies()

    function setInfos(e){
        setIndex(index)
        setType(type)
        setCheck(check)
        verifyLocalTabs()
    }


    function deleteTab(){
        const item = tabs.filter(item => item.index == index)[0]
        const localItem = tabs.indexOf(item)
        tabs.splice(localItem, 1)
        attLocalTabs();
        removeCookie(index)
        console.log('DELETE')
    }

    return (
        <div  onClick={setInfos} className={styles.containerTab} >
            <div className={styles.divNameTab}>
                {
                    'TAB (' + index + ')'
                }
            </div>
            <div onClick={deleteTab} className={styles.containerTabDel}>
                <img src={svgCross} alt="" />
            </div>
        </div>
    )
}