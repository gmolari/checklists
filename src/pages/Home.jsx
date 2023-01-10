import { Link } from "react-router-dom"
import { useState } from "react"
import Select from 'react-select'
import styles from "./Home.module.css"

const Home = () => {
    const [typeOfChecklists, setTypeOfChecklists] = useState([
        {value: 'attendance', label: 'Attendance'},
        {value: 'maintenance', label: 'Maintenance'},
        {value: 'activation', label: 'Activation'},
        {value: 'ns_migration', label: 'NS Migration'},
        {value: 'corp_emp', label: 'Corporate and Business'},
        {value: 'retention', label: 'Retention'},
        {value: 'Smartzap', label: 'Smartzap'},
        {value: 'out_point', label: 'Out Point'},
    ]);

    const [selectValue, setSelectValue] = useState('');

    // ATENDIMENTO, MANUTENÇÃO, ATIVAÇÃO, 
    // MIGRAÇÃO NS, CORPORATIVO/EMPRESARIAL, 
    // RETENÇÃO, SMARTZAP, PONTO FORA

    return (
        <div className={styles.divContainerMain}>
            <h2> A page for your Checklists! </h2>
            <section className={styles.section}>
                <h3> Choose the type of Checklist: </h3>
                <Select 
                    options={typeOfChecklists} 
                    onChange={(e) => {setSelectValue(e.value)}}
                />
                <button>Next</button>
            </section>
        </div>
    )  
}

export default Home