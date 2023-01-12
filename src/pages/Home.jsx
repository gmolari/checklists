import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import Select from 'react-select'
import styles from "./Home.module.css"
import Checklist from "./Checklist"
import ChooseChecklist from './ChooseChecklist'

const Home = () => {
    const [typeOfChecklists, setTypeOfChecklists] = useState([
        {value: 'attendance', label: 'Attendance'},
        {value: 'maintenance', label: 'Maintenance'},
        {value: 'activation', label: 'Activation'},
        {value: 'maintenance_delta', label: 'Manutenção Delta'},
        {value: 'ns_migration', label: 'NS Migration'},
        {value: 'corp_emp', label: 'Corporate and Business'},
        {value: 'retention', label: 'Retention'},
        {value: 'Smartzap', label: 'Smartzap'},
        {value: 'out_point', label: 'Out Point'},
    ]);

    const [selectValue, setSelectValue] = useState('');
    const [type, setType] = useState('')
    const {check} = useParams();

    // ATENDIMENTO, MANUTENÇÃO, ATIVAÇÃO, 
    // MIGRAÇÃO NS, CORPORATIVO/EMPRESARIAL, 
    // RETENÇÃO, SMARTZAP, PONTO FORA

    return (
        <div className={styles.divContainerMain}>

            <div className={styles.divContainerChecklist}>
                {
                    check !== undefined ?
                        <Checklist type={type} check={check} />
                    : ''
                }
            </div>

            <div className={styles.divContainerSelect}>
                <h2> A page for your Checklists! </h2>
                <section className={styles.section}>
                    <h3> Choose the type of Checklist: </h3>
                    <Select
                        options={typeOfChecklists}
                        onChange={(e) => {setType(e.value)}}
                    />
                </section>
            </div>

            <div className={styles.divContainerChoose}>
                {
                    type !== '' ?
                        <ChooseChecklist type={type} />
                    : ''
                }
            </div>
            
        </div>
    )  
}

export default Home