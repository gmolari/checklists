import styles from "./Checklist.module.css";
import { useState, useEffect, useContext } from "react";
import checklists from "../components/Checklists";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Context } from "../context/Context";

const Checklist = ({ setRandomKey, cookies, setCookies }) => {
  const {type, check, ans, setAns, index, infos} = useContext(Context)
  const [questions, setQuestions] = useState(
    checklists[type]?.checks[check]?.questions
  );

  const bodyToast = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }

  const [formatAns, setFormatAns] = useState();
  const [checkChangeCheck, setCheckChange] = useState();

  useEffect(() => {
    setQuestions(checklists[type]?.checks[check]?.questions);
    setCheckChange(Math.random() * 999999);
  }, [check]);

  useEffect(() => {
    setAns({})
    const inpFocus = document.getElementById(`idInpFocus`);
    if (cookies[index]) {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        let valueCookie = cookies[index][value];
        if (valueCookie) {
          inpAns.value = valueCookie;
        } else inpAns.value = "";
        setAns((prevValue) => ({
            ...prevValue,
            [value]: inpAns.value,
        }));
      }
      inpFocus
        ? cookies[index].inpFocus
          ? (inpFocus.value = cookies[index].inpFocus)
          : (inpFocus.value = null)
        : "";
    } else {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        inpAns.value = null;
      }
    }
  }, [checkChangeCheck, index]);

  // WHEN ANS AND QUESTIONS CHANGE
  useEffect(() => {
    let formatedAns = "";
    for (const i in questions) {
      switch (type) {
        case "schedulling":
          if (ans) {
            ans.inpFocus && i == 0
              ? (formatedAns = `.·.·.·.·.·.·${ans.inpFocus.toUpperCase()}·.·.·.·.·.·.\n`)
              : "";
            if (ans[i]) {
              if (questions[i].includes("PORTA")) {
                formatedAns =
                  formatedAns + ` ${questions[i]} ${ans[i]}\n`;
                continue;
              }

              if (questions[i].includes("CAIXA")) {
                formatedAns =
                  formatedAns + `¶ ${questions[i]} ${ans[i]}`;
                continue;
              }

              if (check == 'messagesc'){
                let question = questions[i].slice(0, questions[i].length-1)
                if (i == 0 || i == 3 || i == 1) {
                  formatedAns = 
                  formatedAns + `${question}....: ${ans[i]}\n`;
                }else if (i == 2){
                  formatedAns = 
                  formatedAns + `${question}...........: ${ans[i]}\n`;
                }else if (i == questions.length - 1){
                  formatedAns = 
                  formatedAns + `\n${question}: ${ans[i]}`
                }else {
                  formatedAns = 
                  formatedAns + `${question}: ${ans[i]}\n`
                }
                continue
              }
              formatedAns =
                formatedAns + `¶ ${questions[i]} ${ans[i]}\n`;
            } else if (questions[i].includes("PORTA")) {
              formatedAns = formatedAns + `\n`;
              continue;
            }
            ans.inpFocus && i >= questions.length - 1 && check !== "los"
              ? (formatedAns =
                  formatedAns +
                  `.·.·.·.·.·.·${ans.inpFocus.toUpperCase()}·.·.·.·.·.·.`)
              : "";
          }
          if (check == "los") {
            if (i >= questions.length - 1) {
              formatedAns +=
                "¶ DBM: Inativa\n" +
                "¶ MOTIVO: LOS VERMELHO\n" +
                "¶ OBS: Verificar infra, ONU, conectores...";

              ans
                ? ans.inpFocus
                  ? (formatedAns += `\n.·.·.·.·.·.·${ans.inpFocus.toUpperCase()}·.·.·.·.·.·.`)
                  : ""
                : "";
              continue;
            }
          }
          break;

        case "activation":
        case "maintenance":
        case "migration":
          if (ans) {
            if (ans[i]) {
              if (i <= 3) {
                if (i == 3) {
                  formatedAns =
                    formatedAns + `${questions[i]} ${ans[i]}\n\n\n`;
                  continue;
                }
                formatedAns =
                  formatedAns + `${questions[i]} ${ans[i]}\n`;
                continue;
              }
              formatedAns =
                formatedAns + `${questions[i]}\n${ans[i]}\n\n`;
            }
          }
          break;

        default:
          if (ans) {
            if (ans[i]) {
              formatedAns =
                formatedAns + `${questions[i]}\n${ans[i]}\n\n`;
            }
          }
          break;
      }
    }

    setCookies(index, ans ? ans : '')

    setFormatAns(formatedAns);
  }, [ans, questions]);

  function handleAns(value) {
    setAns((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }));
  }

  function resetForm() {
    let reset = confirm("RESETAR A PÁGINA?");
    if (reset) {
      if (cookies[type]) {
        cookies[type][check] ? delete cookies[type][check] : "";
      }
      setRandomKey(Math.random());
    }
  }

  const copied = () => {
    toast.info("Copiado com sucesso!", bodyToast)
  };

  return (
    <div className={styles.divMainContainer}>
      <h2 className={styles.h2}> {checklists[type].checks[check].name[0]} </h2>
      {type !== "schedulling"
        ? questions.map((e) => (
            <div
              key={`div${questions.indexOf(e)}`}
              className={styles.divQuestion}
            >
              <label
                htmlFor={`idInp${questions.indexOf(e)}`}
                key={`p${questions.indexOf(e)}`}
                className={styles.p}
              >
                {e}
              </label>

              <textarea
                name={`${questions.indexOf(e)}`}
                id={`idInp${questions.indexOf(e)}`}
                key={`inp${questions.indexOf(e)}`}
                type="text"
                className={styles.inputText}
                autoComplete="off"
                onChange={handleAns}
              />
            </div>
          ))
        : questions.map((e) => (
            <div
              key={`div${questions.indexOf(e)}`}
              className={styles.divQuestionSche}
            >
              <label
                htmlFor={`idInp${questions.indexOf(e)}`}
                key={`p${questions.indexOf(e)}`}
                className={styles.p}
              >
                ¶ {e.toUpperCase()}
              </label>

              <textarea
                name={`${questions.indexOf(e)}`}
                id={`idInp${questions.indexOf(e)}`}
                key={`inp${questions.indexOf(e)}`}
                type="text"
                className={styles.inputText}
                autoComplete="off"
                onChange={handleAns}
              />
            </div>
          ))}
      {type === "schedulling" && check !== 'messagesc' ? (
        <div className={styles.divQuestionSche}>
          <label htmlFor={`idInpFocus`} className={styles.p}>
            ¶ DESTAQUE:
          </label>
          <textarea
            name={`inpFocus`}
            id={`idInpFocus`}
            type="text"
            className={styles.inputText}
            autoComplete="off"
            onChange={handleAns}
            placeholder={`LIGAR ANTES, DEPOIS DAS..., RETENÇÃO...`}
          />
        </div>
      ) : (
        ""
      )}
      <div className={styles.divButton}>
        <button className={styles.button} onClick={resetForm}>
          Resetar
        </button>
        <CopyToClipboard onCopy={copied} text={formatAns}>
          <button className={styles.button}> Copiar </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Checklist;
