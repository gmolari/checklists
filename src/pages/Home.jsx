import { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Home.module.css";
import Checklist from "./Checklist";
import ChooseChecklist from "./ChooseChecklist";

const Home = ({ cookies, setCookies }) => {
  const [type, setType] = useState("");
  const [check, setCheck] = useState("");
  const [tabs, setTabs] = useState([]);
  const [count, setCount] = useState(0);
  const [atualTab, setAtualTab] = useState("");

  useEffect(() => {
    cookies.type ? setType(cookies.type) : "";
    cookies.check ? setCheck(cookies.check) : "";
    cookies.tabs ? setTabs(cookies.tabs) : "";
    cookies.atual_tab ? setAtualTab(cookies.atual_tab) : "";
    cookies.count ? setCount(parseInt(cookies.count)) : "";
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

  function setCookieCheck(check) {
    console.log(type);
    setCount(count + 1);
    tabs.push({
      value: `tab_${check}_${count}`,
      name: `New tab ${check}`,
      check,
      type,
    });
    setAtualTab(`tab_${check}_${count}`);
    setCheck(check);
    setCookies("check", check);
    setCookies("count", count);
    setCookies("atual_tab", atualTab);
    setCookies("tabs", tabs);
  }

  function setName(e) {
    for (const i in tabs) {
      if (tabs[i].value == e.target.id) {
        tabs[i].name = e.target.value;
      }
    }
    setCookies("tabs", tabs);
  }

  function nodeDelete(e) {
    e.preventDefault();
    const idTab = e.target.id.split(" ");
    console.log(idTab);
    for (const i in tabs) {
      if (tabs[i].value == idTab[0]) {
        tabs.splice(i, 1);
      }
    }
    setCookies("tabs", tabs);
  }

  const handleAtualTab = (e) => {
    const idTab = e.target.id.split(" ");
    setAtualTab(idTab[0]);
    setCheck(idTab[1]);
    setType(idTab[2]);
  };

  return (
    <div className={styles.divContainerMain}>
      <div className={styles.divContainerTabs}>
        {tabs
          ? tabs.map((index) => (
              <input
                key={index.value}
                onChange={setName}
                onClick={handleAtualTab}
                onContextMenu={nodeDelete}
                id={`${index.value} ${index.check} ${index.type}`}
                name="tabs"
                value={index.name}
                className={styles.divTab}
              />
            ))
          : ""}
      </div>

      <div className={styles.divContainerChecklist}>
        {check !== "" ? (
          <Checklist
            type={type}
            check={check}
            cookies={cookies}
            setCookies={setCookies}
            atualTab={atualTab}
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
    </div>
  );
};

export default Home;
