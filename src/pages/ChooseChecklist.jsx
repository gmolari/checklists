import styles from './ChooseChecklist.module.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import checklists from '../components/Checklists'

const ChooseChecklist = () => {
    const {type} = useParams();
    const [arrayChecklist, setArrayChecklist] = useState([]);

    for (const check in checklists[type]){
        arrayChecklist.push(checklists[type][check].name)
    }
    

    return (
        <div className={styles.divMainContainer}>
            {arrayChecklist.map((index) => 
                <span key={index}> {index} </span>
            )}
        </div>
    )
}

export default ChooseChecklist