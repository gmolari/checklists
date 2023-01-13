import { useEffect, useState } from "react"
import Select from 'react-select'
import styles from "./Home.module.css"
import Checklist from "./Checklist"
import ChooseChecklist from './ChooseChecklist'

const Home = ({cookies, setCookies}) => {
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
        {value: 'schedulling', label: 'Schedulling'},
    ]);
    

    function setInfos(e) {
        setCookies('check', '', {path: '/', maxAge: 60*10})
        setCookies('type', e.value, {path: '/', maxAge: 60*10})
    }

    function setCheck(valor) {
        setCookies('check', valor, {path: '/', maxAge: 60*10})
    }

    // ATENDIMENTO, MANUTENÇÃO, ATIVAÇÃO, 
    // MIGRAÇÃO NS, CORPORATIVO/EMPRESARIAL, 
    // RETENÇÃO, SMARTZAP, PONTO FORA

    return (
        <div className={styles.divContainerMain}>

            <div className={styles.divContainerChecklist}>
                {
                    cookies.check ?
                        <Checklist type={cookies.type} check={cookies.check} cookies={cookies} setCookies={setCookies} />
                    : ''
                }
            </div>

            <div className={styles.divContainerSelect}>
                <h2> A page for your Checklists! </h2>
                <section className={styles.section}>
                    <h3> Choose the type of Checklist: </h3>
                    <Select
                        options={typeOfChecklists}
                        onChange={setInfos}
                    />
                </section>
            </div>

            <div className={styles.divContainerChoose}>
                {
                    cookies.type ?
                        <ChooseChecklist setCheck={setCheck} type={cookies.type} />
                    : ''
                }
            </div>
            
        </div>
    )  
}

export default Home