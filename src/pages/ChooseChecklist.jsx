import styles from "./ChooseChecklist.module.css";
import { useState, useEffect, useContext } from "react";
import checklists from "../components/Checklists";
import { Context } from "../context/Context";

const ChooseChecklist = ({ type, setCheck, cookies, setCookies }) => {
  const [arrayChecklist, setArrayChecklist] = useState([]);
  const {tabs, ans, setIndex, index} = useContext(Context)

  for (const check in checklists[type].checks) {
    arrayChecklist.length < Object.keys(checklists[type].checks).length
      ? arrayChecklist.push(checklists[type].checks[check].name)
      : "";
  }

  useEffect(() => {
    for (const check in checklists[type].checks) {
      if (arrayChecklist.length > 0) {
        setArrayChecklist([]);
      }
      arrayChecklist.length < Object.keys(checklists[type].checks).length
        ? arrayChecklist.push(checklists[type].checks[check].name)
        : "";
    }
  }, [type]);

  return (
    <div className={styles.divMainContainer}>
      <section className={styles.section}>
        <h2> {checklists[type].name} </h2>
        <div className={styles.divContainerButtons}>
          {arrayChecklist.map((index) => (
            <button
              className={styles.button}
              key={index[1] + type}
              onClick={() => {
                const protocolo = prompt('Digite um nome para a aba (único, protocolo, por exemplo)')

                for (const i in tabs){
                  if (tabs.length+1+protocolo == tabs[i].index) {
                    alert('Já existe')
                    return
                  }
                }

                setCheck(index[1])
                if (index[1] && type){
                  tabs.push({
                      index: tabs.length+1+' '+'('+protocolo+')',
                      type,
                      check: index[1],
                  })
                  
                  setIndex(tabs.length+' '+'('+protocolo+')')
                  setCookies('cIndex', tabs.length+' '+'('+protocolo+')')
                  localStorage.setItem('tabs', JSON.stringify(tabs))
                }
              }}
            >
              {index[0].toUpperCase()}
            </button>
          ))}
          <button onClick={() => {
            console.log(
              'LocalTabs:',JSON.parse(localStorage.getItem('tabs'))
              , 'Tabs:', tabs,
              'Var Index:',index,
              'cIndex:',cookies.cIndex,
              'Index Cookie (ans):', cookies[index])
          }} className={styles.button}>TESTE</button>
        </div>
      </section>
    </div>
  );
};

export default ChooseChecklist;
