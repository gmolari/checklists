import { useEffect, useState } from "react";
import { createContext } from "react";
import { useTabs } from "../hooks/Tabs";
import { useCookies } from "react-cookie";
import checklists from "../components/Checklists";

const Context = createContext();


function UserProvider({children}){
    const {tabs, attLocalTabs} = useTabs()
    const [cookies, setCookies, removeCookie] = useCookies();
    const [type, setType] = useState(cookies.cType ? cookies.cType : '');
    const [check, setCheck] = useState(cookies.cCheck ? cookies.cCheck : '');
    const [index, setIndex] = useState(cookies.cIndex ? cookies.cIndex : '');
    const localTabs = JSON.parse(localStorage.getItem('tabs'))
    const [ans, setAns] = useState();
    const [infos, setInfos] = useState();
    const [answers, setAnswers] = useState(localStorage.getItem(index));
    const [questions, setQuestions] = useState(
        checklists[type]?.checks[check]?.questions
    );
    const [nameChecklist, setNameChecklist] = useState(checklists[type]?.checks[check]?.name[0]);

    function deleteCookie(cookie){
        removeCookie(cookie)
    }

    function verifyLocalTabs(){
        if ( !localTabs || localTabs.length <= 1){
            setCheck('los')
        }
    }

    useEffect(() => {
        if ( !localTabs || localTabs.length <= 0){
            setCheck('')
        }
        if (answers)
        setAns(JSON.parse(answers))
        // setInfos(cookies[index])
    }, [])

    useEffect(() => {
        index || index == '' ? setCookies('cIndex', index) : ''
        setAnswers(localStorage.getItem(index))
        setAns('')
        setQuestions(checklists[type]?.checks[check]?.questions)
        setNameChecklist(checklists[type]?.checks[check]?.name[0])
    }, [index])

    useEffect(() => {
        type || type == '' ? setCookies('cType', type) : ''
    }, [type])

    useEffect(() => {
        check || check == '' ? setCookies('cCheck', check) : ''
        setAns('')
        setQuestions(checklists[type]?.checks[check]?.questions)
        setNameChecklist(checklists[type]?.checks[check]?.name[0])
    }, [check])

    useEffect(() => {
        if (!questions) {
            setQuestions(checklists[type]?.checks[check]?.questions)
        }
    }, [questions])

    return (
        <Context.Provider 
        value={
            {
                tabs, 
                type, 
                check, 
                setType, 
                setCheck,
                ans,
                setAns,
                index,
                setIndex,
                attLocalTabs,
                verifyLocalTabs,
                infos,
                deleteCookie,
                answers,
                questions,
                nameChecklist,
                setAnswers
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {
    UserProvider,
    Context
}