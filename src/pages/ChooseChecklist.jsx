import styles from './ChooseChecklist.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import checklists from '../components/Checklists'

const ChooseChecklist = ({type, setCheck}) => {
    const [arrayChecklist, setArrayChecklist] = useState([]);

    for (const check in checklists[type].checks){
        arrayChecklist.length < Object.keys(checklists[type].checks).length ?  arrayChecklist.push(checklists[type].checks[check].name) : '';
    }

    useEffect(() => {
        for (const check in checklists[type].checks){
            if (arrayChecklist.length > 0) {
                setArrayChecklist([])
            }
            arrayChecklist.length < Object.keys(checklists[type].checks).length ?  arrayChecklist.push(checklists[type].checks[check].name) : '';
        }
    }, [type])
    

    return (
        <div className={styles.divMainContainer}>

            <section className={styles.section}>
                <h2> {checklists[type].name} </h2>
                <div className={styles.divContainerButtons}>
                    {arrayChecklist.map((index) =>
                        <button className={styles.button} key={index[0]+type} onClick={() => setCheck(index[1])}> 
                            {index[0].toUpperCase()} 
                        </button> 
                    )}
                </div>
            </section>

        </div>
    )
}

export default ChooseChecklist