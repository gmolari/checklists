import styles from "./Checklist.module.css";
import { useState, useEffect } from "react";
import checklists from "../components/Checklists";
import CopyToClipboard from "react-copy-to-clipboard";

const Checklist = ({ type, check, cookies, setCookies }) => {
  const [questions, setQuestions] = useState(
    checklists[type].checks[check].questions
  );
  const [ans, setAns] = useState({});
  const [formatAns, setFormatAns] = useState();
  const [msg, setMsg] = useState("");
  const [checkChangeCheck, setCheckChange] = useState();

  useEffect(() => {
    if (cookies[type]) {
      setAns(cookies[type]);
    } else setCookies(type, "");
  }, []);

  useEffect(() => {
    setQuestions(checklists[type].checks[check].questions);
    setCheckChange(Math.random() * 999999);
  }, [check]);

  useEffect(() => {
    if (cookies[type] && cookies[type][check]) {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        let valueCookie = cookies[type][check][value];
        if (valueCookie) {
          inpAns.value = valueCookie;
        } else inpAns.value = "";
        setAns((prevValue) => ({
          ...prevValue,
          [check]: {
            ...prevValue[check],
            [value]: inpAns.value,
          },
        }));
      }
    } else {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        inpAns.value = null;
      }
    }
  }, [checkChangeCheck]);

  // WHEN ANS AND QUESTIONS CHANGE
  useEffect(() => {
    let formatedAns = "";
    for (const i in questions) {
      if (ans[check]) {
        if (ans[check][i]) {
          switch (type) {
            case "schedulling":
              if (questions[i].includes("CAIXA")) {
                formatedAns =
                  formatedAns + `¶ ${questions[i]} ${ans[check][i]}`;
                continue;
              }

              if (questions[i].includes("PORTA")) {
                formatedAns =
                  formatedAns + ` ${questions[i]} ${ans[check][i]}\n`;
                continue;
              }

              formatedAns =
                formatedAns + `¶ ${questions[i]} ${ans[check][i]}\n`;

              if (check == "los") {
                if (i >= 7) {
                  formatedAns =
                    formatedAns +
                    "¶ DBM: Inativa\n" +
                    "¶ MOTIVO: LOS VERMELHO\n" +
                    "¶ OBS: Verificar infra, ONU, conectores...";
                  continue;
                }
              }

              break;

            case "activation":
            case "maintenance":
            case "migration":
              if (i <= 3) {
                if (i == 3) {
                  formatedAns =
                    formatedAns + `${questions[i]} ${ans[check][i]}\n\n\n`;
                  continue;
                }
                formatedAns =
                  formatedAns + `${questions[i]} ${ans[check][i]}\n`;
                continue;
              }
              formatedAns =
                formatedAns + `${questions[i]}\n${ans[check][i]}\n\n`;
              break;

            default:
              formatedAns =
                formatedAns + `${questions[i]}\n${ans[check][i]}\n\n`;
              break;
          }
        }
      }
    }

    setCookies(type, ans);

    setFormatAns(formatedAns);
  }, [ans, questions]);

  function handleAns(value) {
    setAns((prevValue) => ({
      ...prevValue,
      [check]: {
        ...prevValue[check],
        [value.target.name]: value.target.value,
      },
    }));
  }

  function resetForm() {
    for (const i in questions) {
      const inpAns = document.getElementById(`idInp${i}`);
      inpAns.value = "";
      setAns((prevValue) => ({
        ...prevValue,
        [check]: {
          ...prevValue[check],
          [i]: inpAns.value,
        },
      }));
      cookies[type] ? delete cookies[type][check][i] : "";
    }
  }

  const copied = () => {
    setMsg("Copiado com sucesso!");
    setTimeout(() => {
      setMsg("");
    }, 5000);
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
                ¶ {e}
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
      <div className={styles.divButton}>
        <span className={styles.span}> {msg} </span>
        <button className={styles.button} onClick={resetForm}>
          Reset Form
        </button>
        <CopyToClipboard onCopy={copied} text={formatAns}>
          <button className={styles.button}> Copy </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Checklist;
