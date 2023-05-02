import { useContext } from 'react'
import styles from '../pages/Home.module.css'
import { Context } from '../context/Context'
import { useCookies } from 'react-cookie'
import svgCross from '../public/assets/x.svg'

export default function Tab({index, check, type}){
    const {setIndex, setCheck, setType,tabs, attLocalTabs, verifyLocalTabs, setAns} = useContext(Context)
    const [cookies, setCookies, removeCookie] = useCookies()

    function setInfos(e){
        setIndex(index)
        setType(type)
        setCheck(check)
        console.log(localStorage.getItem('tabs'))
    }


    function deleteTab(){
        const item = tabs.filter(item => item.index == index)[0]
        const localItem = tabs.indexOf(item)
        tabs.splice(localItem, 1)
        attLocalTabs();        
        removeCookie(index)
    }

    return (
        <div  onClick={setInfos} className={styles.containerTab} >
            <div className={styles.divNameTab}>
                {
                    index
                }
            </div>
            <div onClick={deleteTab} className={styles.containerTabDel}>
                <img src={svgCross} alt="" />
            </div>
        </div>
    )
}