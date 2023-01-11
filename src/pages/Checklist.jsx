import styles from './Checklist.module.css'
import { Children, useState } from 'react'
import { useParams } from 'react-router-dom'
import checklists from '../components/Checklists'
import CopyToClipboard from 'react-copy-to-clipboard'

const Checklist = () => {
    const {type, check} = useParams();
    const [questions, setQuestions] = useState(checklists[type].checks[check].questions);

    const h1 = <h1> Clipboard Copy </h1>

    return (
        // <div>
        //     {questions.map( question => 
        //         <p> {question} </p>
        //      )}
        // </div>
        <div className="App">
            {h1}
            <CopyToClipboard
            text={h1.props.children}
            onCopy={() => alert("Copied")}>
            <button>Copy with this button</button>
            </CopyToClipboard>
        </div>
    )

}

export default Checklist