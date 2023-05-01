import { useContext } from 'react'
import styles from '../pages/Home.module.css'
import { Context } from '../context/Context'
import { useCookies } from 'react-cookie'

export default function Tab({index, check, type}){
    const {setIndex, setCheck, setType} = useContext(Context)
    const allIndex = useContext(Context).index
    const [cookies, setCookies] = useCookies()

    function setInfos(e){
        setIndex(index)
        setType(type)
        setCheck(check)
        console.log(cookies[index], index)
    }

    return (
        <div  onClick={setInfos} className={styles.containerTab} >
            {
                'TAB (' + index + ')'
            }
        </div>
    )
}