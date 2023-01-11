import styles from './Checklist.module.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import checklists from '../components/Checklists'

const Checklist = () => {
    const {type, check} = useParams();

    console.log(checklists[type].checks[check].name[0])

    return (
        <div>
            {checklists[type].checks[check].name[0]}
        </div>
    )

}

export default Checklist