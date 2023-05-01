import { useContext } from 'react'
import styles from '../pages/Home.module.css'
import { Context } from '../context/Context'


export default function Tab({index, check, type}){
    const {setIndex, setCheck, setType} = useContext(Context)

    function setInfos(e){
        const {id} = e.target
        setIndex(id.split(' ')[0])
        setType(id.split(' ')[1])
        setCheck(id.split(' ')[2])
    }

    return (
        <div  onClick={setInfos} id={`${index} ${type} ${check}`} className={styles.containerTab} >
            {
                'TAB (' + index + ')'
            }
        </div>
    )
}