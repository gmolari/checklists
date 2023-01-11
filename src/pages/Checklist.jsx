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
    const [msg, setMsg] = useState();

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
    }

    return (
        <div className={styles.divMainContainer}>
            {
                questions.map((e) => 
                    <div key={`div${questions.indexOf(e)}`} 
                        className={styles.divQuestion}>
                        
                        <p key={`p${questions.indexOf(e)}`} className={styles.p}>
                            {e}
                        </p>
                        
                        <input 
                            name={`${questions.indexOf(e)}`} 
                            key={`inp${questions.indexOf(e)}`} 
                            type="text" 
                            className={styles.inputText}
                            onChange={handleAns} />
                    
                    </div>
                )
            }
            <CopyToClipboard onCopy={copied} text={formatAns}>
                <button className={styles.button} onClick={() => console.log(formatAns)}> Click me </button>
            </CopyToClipboard> <span className={styles.span}> {msg} </span>
        </div>
    )

}

export default Checklist