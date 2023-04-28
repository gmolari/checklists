import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Home.module.css";
import Checklist from "./Checklist";
import ChooseChecklist from "./ChooseChecklist";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import checklists from "../components/Checklists";
import Tabs from "../components/Tabs";
import { Context } from "../context/Context";

const Home = ({ cookies, setCookies }) => {
  const [type, setType] = useState("");
  const [check, setCheck] = useState("");
  const [randomKey, setRandomKey] = useState(Math.random());
  const {tabs} = useContext(Context)

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
        {
          tabs && tabs.map(i => (
            <Tabs name={'teste'} type={'teste'} index={'teste'} check={'teste'} />
          ))
        }
        {check !== "" ? (
          <Checklist
            setRandomKey={setRandomKey}
            key={randomKey}
            type={type}
            check={check}
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
