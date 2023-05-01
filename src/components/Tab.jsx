import { useContext } from 'react'
import styles from '../pages/Home.module.css'
import { Context } from '../context/Context'
import { useCookies } from 'react-cookie'

export default function Tab({index, check, type}){
    const {setIndex, setCheck, setType,tabs, attLocalTabs, verifyLocalTabs} = useContext(Context)
    const allIndex = useContext(Context).index
    const [cookies, setCookies, removeCookie] = useCookies()

    function setInfos(e){
        setIndex(index)
        setType(type)
        setCheck(check)
    }

    function deleteTab(){
        console.log(tabs)

        const item = tabs.filter(item => item.index == index)[0]
        
        const localItem = tabs.indexOf(item)

        tabs.splice(localItem, 1)

        console.log(tabs)

        attLocalTabs();

        removeCookie(index)

        verifyLocalTabs()
    }

    return (
        <div  onClick={setInfos} className={styles.containerTab} >
            {
                'TAB (' + index + ')'
            }
            <div onClick={deleteTab} className={styles.containerTabDel}>
                
            </div>
        </div>
    )
}