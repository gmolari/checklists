import styles from './Checklist.module.css'
import { useState, useEffect } from 'react'
import checklists from '../components/Checklists'
import CopyToClipboard from 'react-copy-to-clipboard'

const Checklist = ({type, check}) => {

    const [questions, setQuestions] = useState(checklists[type].checks[check].questions);
    const [ans, setAns] = useState({});
    const [formatAns, setFormatAns] = useState();
    const [msg, setMsg] = useState('')

    useEffect(() => {
        let formatedAns = ''
        for(const i in questions) {
            switch(type) {
                case 'schedulling':
                    
                break;
            }
            
            if (type !== 'schedulling'){
                formatedAns = formatedAns +
                `${questions[i]} \n${ans[i] ? ans[i] : ''} \n\n`
            }else {
                if (questions[i].includes('CAIXA')) {
                    formatedAns = formatedAns +
                    `¶ ${questions[i]} ${ans[i] ? ans[i] : ''}`
                    continue;
                }
                if (questions[i].includes('PORTA')){
                    formatedAns = formatedAns +
                    ` ${questions[i]} ${ans[i] ? ans[i] : ''}\n`
                    continue    
                }
                formatedAns = formatedAns +
                `¶ ${questions[i]} ${ans[i] ? ans[i] : ''}\n`
            }
        }
        setFormatAns(formatedAns);
    }, [ans])

    useEffect(() => {
        setQuestions(checklists[type].checks[check].questions);
    }, [check])


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
                type !== 'schedulling' ?
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
                            autoComplete="off"
                            onChange={handleAns}
                             />
                    
                    </div>
                ) : 
                questions.map((e) => 
                    <div key={`div${questions.indexOf(e)}`} 
                        className={styles.divQuestionSche}>
                        
                        <label htmlFor={`idInp${questions.indexOf(e)}`} 
                            key={`p${questions.indexOf(e)}`} 
                            className={styles.p}>
                            ¶ {e}
                        </label>
                        
                        <input 
                            name={`${questions.indexOf(e)}`}
                            id={`idInp${questions.indexOf(e)}`}
                            key={`inp${questions.indexOf(e)}`} 
                            type="text" 
                            className={styles.inputText}
                            autoComplete="off"
                            onChange={handleAns}
                             />
                    
                    </div>
                )
            }
            <div className={styles.divButton}>
                <span className={styles.span}> {msg} </span>
                <CopyToClipboard onCopy={copied} text={formatAns}>
                    <button className={styles.button}> Copy </button>
                </CopyToClipboard>
            </div>
        </div>
    )

}

export default Checklist