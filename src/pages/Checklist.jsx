import styles from "./Checklist.module.css";
import { useState, useEffect } from "react";
import checklists from "../components/Checklists";
import CopyToClipboard from "react-copy-to-clipboard";

const Checklist = ({ type, check, cookies, setCookies }) => {
  const [cookieAnswer, setCookieAnswer] = useState(cookies.ans);
  const [questions, setQuestions] = useState(
    checklists[type].checks[check].questions
  );
  const [ans, setAns] = useState({});
  const [formatAns, setFormatAns] = useState();
  const [msg, setMsg] = useState("");
  const [checkChangeCheck, setCheckChange] = useState();

  useEffect(() => {
    if (cookies.ans) {
      setCookieAnswer(cookies.ans);
      if (cookies.ans[type]) {
        setAns(cookies.ans[type]);
      }
    }
  }, []);

  useEffect(() => {
    setQuestions(checklists[type].checks[check].questions);
    if (cookies.ans) {
      setCookieAnswer(cookies.ans);
    }
    setCheckChange(Math.random() * 999999);
  }, [check]);

  useEffect(() => {
    if (cookies.ans && cookies.ans[type] && cookies.ans[type][check]) {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        let valueCookie = cookies.ans[type][check][value];
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
        inpAns.value = "";
        setAns((prevValue) => ({
          ...prevValue,
          [check]: {
            ...prevValue[check],
            [value]: inpAns.value,
          },
        }));
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

    setCookieAnswer((prevValue) => ({
      ...prevValue,
      [type]: ans,
    }));

    setFormatAns(formatedAns);
  }, [ans, questions]);

  useEffect(() => {
    setCookies("ans", cookieAnswer);
  }, [cookieAnswer]);

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
      cookies.ans ? delete cookies.ans[type][check][i] : "";
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

              <input
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

              <input
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
        {/* <button onClick={() => console.log("CookieAnswer: ", cookieAnswer)}>
          CookieAnswer
        </button>*/}
        {/* <button onClick={() => console.log("Answer: ", ans)}>Ans</button> */}
        {/* <button onClick={() => console.log("Type:", type)}>Type</button> */}
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
