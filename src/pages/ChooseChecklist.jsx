import styles from './ChooseChecklist.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import checklists from '../components/Checklists'

const ChooseChecklist = () => {
    const {type} = useParams();
    const [arrayChecklist, setArrayChecklist] = useState([]);

    for (const check in checklists[type].checks){
        arrayChecklist.length < 4 ? arrayChecklist.push(checklists[type].checks[check].name) : '';
    }
    

    return (
        <div className={styles.divMainContainer}>

            <section className={styles.section}>
                <h2> {checklists[type].name} </h2>
                <div className={styles.divContainerButtons}>
                    {arrayChecklist.map((index) =>
                        <Link to={`/choose-checklist/${type}/${index[1]}`} key={index[0]} className={styles.link}>
                            <button className={styles.button} key={index[0]+'1'}> 
                                {index[0].toUpperCase()} 
                            </button> 
                        </Link>
                    )}
                </div>
            </section>

        </div>
    )
}

export default ChooseChecklist