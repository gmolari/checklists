import styles from './Checklist.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import checklists from '../components/Checklists'
import CopyToClipboard from 'react-copy-to-clipboard'

const Checklist = () => {
    const {type, check} = useParams();

    const [questions, setQuestions] = useState(checklists[type].checks[check].questions);
    const [ans, setAns] = useState({});
    const [formatAns, setFormatAns] = useState();

    useEffect(() => {
        let formatedAns = ''
        for(const i in questions) {
            formatedAns = formatedAns +
            `${questions[i]} \n${ans[i] ? ans[i] : ''} \n\n`
        }
        setFormatAns(formatedAns);
    }, [ans])


    const handleAns = (value) => {
        setAns(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }))
        
    }   

    const copied = () => {
        setMsg('Copiado com sucesso!')
        setTimeout(() => {setMsg('')}, 5000)
    }

    return (
        <div className={styles.divMainContainer}>
            <h2 className={styles.h2}> {checklists[type].checks[check].name[0]} </h2>
            {
                questions.map((e) => 
                    <div key={`div${questions.indexOf(e)}`} 
                        className={styles.divQuestion}>
                        
                        <label htmlFor={`idInp${questions.indexOf(e)}`} 
                            key={`p${questions.indexOf(e)}`} 
                            className={styles.p}>
                            {e}
                        </label>
                        
                        <input 
                            name={`${questions.indexOf(e)}`}
                            id={`idInp${questions.indexOf(e)}`}
                            key={`inp${questions.indexOf(e)}`} 
                            type="text" 
                            className={styles.inputText}
                            onChange={handleAns} />
                    
                    </div>
                )
            }
            <div className={styles.divButton}>
                <span className={styles.span}> Copiado com Sucesso! </span>
                <CopyToClipboard onCopy={copied} text={formatAns}>
                    <button className={styles.button} onClick={() => console.log(formatAns)}> Copy </button>
                </CopyToClipboard>
            </div>
        </div>
    )

}

export default Checklist