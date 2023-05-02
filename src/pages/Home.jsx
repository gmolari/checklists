import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Home.module.css";
import Checklist from "./Checklist";
import ChooseChecklist from "./ChooseChecklist";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import checklists from "../components/Checklists";
import { Context } from "../context/Context";
import Tab from "../components/Tab";
import svgCross from '../public/assets/x.svg'

const Home = ({ cookies, setCookies }) => {
  const {type, check, setType, setCheck, tabs, index} = useContext(Context)
  const [randomKey, setRandomKey] = useState(Math.random());

  useEffect(() => {
    cookies.cType ? setType(cookies.cType) : "";
    cookies.cCheck ? setCheck(cookies.cCheck) : "";
    setTypes();
  }, []);

  function setTypes(){
    let types = [];
    for(const i in checklists){
      types.push({value: checklists[i].src, label: checklists[i].name})
    }

    return types.sort((a, b) => {
      if (a.label.toUpperCase() < b.label.toUpperCase()) return -1
      else return 1
    })
  }

  const [typeOfChecklists, setTypeOfChecklists] = useState(setTypes);

  function setInfos(e) {
    setCheck("");
    setCookies("cCheck", check, { path: "/" });
    setType(e.value);
    setCookies("cType", e.value, { path: "/" });
  }

  function setCookieCheck(valor) {
    setCheck(valor);
    setCookies("cCheck", valor, { path: "/" });
  }

  return (
    <div className={styles.divContainerMain}>
      <div className={styles.divContainerChecklist}>
        <div className={styles.tabsContainer}>
          {
            tabs && tabs.map(i => (
              <Tab key={tabs.indexOf(i)} index={i.index} check={i.check} type={i.type} />
            ))
          }
        </div>
        {check !== "" && index ? (
          <Checklist
            setRandomKey={setRandomKey}
            key={randomKey}
            cookies={cookies}
            setCookies={setCookies}
          />
        ) : (
          ""
        )}
      </div>

      <div className={styles.divContainerSelect}>
        <h2> Página para os Checklists da Persis! </h2>
        <section className={styles.section}>
          <h3> Escolha o tipo do checklist: </h3>
          <Select options={typeOfChecklists} onChange={setInfos} />
        </section>
      </div>

      <div className={styles.divContainerChoose}>
        {type !== "" ? (
          <ChooseChecklist
            setCheck={setCookieCheck}
            cookies={cookies}
            setCookies={setCookies}
            type={type}
          />
        ) : (
          ""
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Home;
