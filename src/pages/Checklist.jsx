import styles from "./Checklist.module.css";
import { useState, useEffect } from "react";
import checklists from "../components/Checklists";
import CopyToClipboard from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Checklist = ({ type, check, cookies, setCookies }) => {
  const [questions, setQuestions] = useState(
    checklists[type].checks[check].questions
  );
  const [copy, setCopy] = useState(false);
  const [ans, setAns] = useState({});
  const [formatAns, setFormatAns] = useState();
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
    const inpFocus = document.getElementById(`idInpFocus`);
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
      inpFocus
        ? cookies[type][check].inpFocus
          ? (inpFocus.value = cookies[type][check].inpFocus)
          : ""
        : "";
    } else {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        inpAns.value = null;
      }
      inpFocus.value = null;
    }
  }, [checkChangeCheck]);

  // WHEN ANS AND QUESTIONS CHANGE
  useEffect(() => {
    let formatedAns = "";
    for (const i in questions) {
      switch (type) {
        case "schedulling":
          if (ans[check]) {
            ans[check].inpFocus && i == 0
              ? (formatedAns = `.·.·.·.·.·.·${ans[
                  check
                ].inpFocus.toUpperCase()}·.·.·.·.·.·.\n`)
              : "";
            if (ans[check][i]) {
              if (questions[i].includes("PORTA")) {
                formatedAns =
                  formatedAns + ` ${questions[i]} ${ans[check][i]}\n`;
                continue;
              }

              if (questions[i].includes("CAIXA")) {
                formatedAns =
                  formatedAns + `¶ ${questions[i]} ${ans[check][i]}`;
                continue;
              }

              formatedAns =
                formatedAns + `¶ ${questions[i]} ${ans[check][i]}\n`;
            } else if (questions[i].includes("PORTA")) {
              formatedAns = formatedAns + `\n`;
              continue;
            }
            ans[check].inpFocus && i >= questions.length - 1 && check !== "los"
              ? (formatedAns =
                  formatedAns +
                  `.·.·.·.·.·.·${ans[
                    check
                  ].inpFocus.toUpperCase()}·.·.·.·.·.·.`)
              : "";
          }
          if (check == "los") {
            if (i >= questions.length - 1) {
              formatedAns +=
                "¶ DBM: Inativa\n" +
                "¶ MOTIVO: LOS VERMELHO\n" +
                "¶ OBS: Verificar infra, ONU, conectores...";

              ans[check]
                ? ans[check].inpFocus
                  ? (formatedAns += `\n.·.·.·.·.·.·${ans[
                      check
                    ].inpFocus.toUpperCase()}·.·.·.·.·.·.`)
                  : ""
                : "";
              continue;
            }
          }
          break;

        case "activation":
        case "maintenance":
        case "migration":
          if (ans[check]) {
            if (ans[check][i]) {
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
            }
          }
          break;

        default:
          if (ans[check]) {
            if (ans[check][i]) {
              formatedAns =
                formatedAns + `${questions[i]}\n${ans[check][i]}\n\n`;
            }
          }
          break;
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
    if (cookies[type]) {
      cookies[type][check] ? delete cookies[type][check] : "";
    }
    for (const i in questions) {
      const inpAns = document.getElementById(`idInp${i}`);
      inpAns.value = "";
      setAns((prevValue) => ({
        ...prevValue,
        [check]: {
          ...prevValue[check],
          [i]: null,
        },
      }));
    }
  }

  const copied = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
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
      {type === "schedulling" ? (
        <div className={styles.divQuestionSche}>
          <label htmlFor={`idInpFocus`} className={styles.p}>
            ¶ Destaque:
          </label>
          <textarea
            name={`inpFocus`}
            id={`idInpFocus`}
            type="text"
            className={styles.inputText}
            rows="10"
            autoComplete="off"
            onChange={handleAns}
            placeholder={`LIGAR ANTES, DEPOIS DAS, RETENÇÃO...\n\nFicará:\n\n\n·.·.·.·.·.·.·.·.LIGAR ANTES·.·.·.·.·.·.·.·.·`}
          />
        </div>
      ) : (
        ""
      )}
      <div className={styles.divButton}>
        <button className={styles.button} onClick={() => console.log(ans)}>
          Teste
        </button>

        <motion.span
          initial={{ top: -100 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          animate={{ top: copy ? 0 : -100 }}
          className={styles.span}
        >
          Copiado com Sucesso!
        </motion.span>
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
