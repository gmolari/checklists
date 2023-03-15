import { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Home.module.css";
import Checklist from "./Checklist";
import ChooseChecklist from "./ChooseChecklist";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ cookies, setCookies }) => {
  const [type, setType] = useState("");
  const [check, setCheck] = useState("");

  useEffect(() => {
    cookies.type ? setType(cookies.type) : "";
    cookies.check ? setCheck(cookies.check) : "";
  }, []);

  const [typeOfChecklists, setTypeOfChecklists] = useState([
    { value: "attendance", label: "Atendimento" },
    { value: "smartzap", label: "Smartzap" },
    { value: "maintenance", label: "Manutenção" },
    { value: "activation", label: "Ativação" },
    { value: "migration", label: "Migração NSLINK" },
    { value: "corp_emp", label: "Corporativo e Empresrial" },
    { value: "retention", label: "Retenção" },
    { value: "out_point", label: "Ponto fora" },
    { value: "schedulling", label: "Agendamento" },
  ]);

  function setInfos(e) {
    setCheck("");
    setCookies("check", check, { path: "/" });
    setType(e.value);
    setCookies("type", e.value, { path: "/" });
  }

  function setCookieCheck(valor) {
    setCheck(valor);
    setCookies("check", valor, { path: "/" });
  }

  return (
    <div className={styles.divContainerMain}>
      <div className={styles.divContainerChecklist}>
        {check !== "" ? (
          <Checklist
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
