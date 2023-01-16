import { useEffect, useState } from "react"
import Select from 'react-select'
import styles from "./Home.module.css"
import Checklist from "./Checklist"
import ChooseChecklist from './ChooseChecklist'

const Home = ({cookies, setCookies}) => {
    const [type, setType] = useState('');
    const [check, setCheck] = useState('');

    useEffect(()=>{
        cookies.type ? setType(cookies.type) : '';
        cookies.check ? setCheck(cookies.check) : '';
    }, [])

    const [typeOfChecklists, setTypeOfChecklists] = useState([
        {value: 'attendance', label: 'Attendance'},
        {value: 'maintenance', label: 'Maintenance'},
        {value: 'activation', label: 'Activation'},
        {value: 'migration', label: 'NS Migration'},
        {value: 'corp_emp', label: 'Corporate and Business'},
        {value: 'retention', label: 'Retention'},
        {value: 'out_point', label: 'Out Point'},
        {value: 'schedulling', label: 'Schedulling'},
    ]);
    

    function setInfos(e) {
        setCheck('')
        setCookies('check', check, {path: '/'})
        setType(e.value)
        setCookies('type', e.value, {path: '/'})
    }

    function setCookieCheck(valor) {
        setCheck(valor)
        setCookies('check', valor, {path: '/'})
    }

    // ATENDIMENTO, MANUTENÇÃO, ATIVAÇÃO, 
    // MIGRAÇÃO NS, CORPORATIVO/EMPRESARIAL, 
    // RETENÇÃO, SMARTZAP, PONTO FORA

    return (
        <div className={styles.divContainerMain}>

            <div className={styles.divContainerChecklist}>
                {
                    check !== '' ?
                        <Checklist type={type} check={check} cookies={cookies} setCookies={setCookies} />
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
                    type !== '' ?
                        <ChooseChecklist setCheck={setCookieCheck} type={type} />
                    : ''
                }
            </div>
            
        </div>
    )  
}

export default Home