import styles from "./Checklist.module.css";
import { useState, useEffect } from "react";
import checklists from "../components/Checklists";
import CopyToClipboard from "react-copy-to-clipboard";

const Checklist = ({ type, check, cookies, setCookies }) => {
  const [cookieAnswer, setCookieAnswer] = useState({});
  const [questions, setQuestions] = useState(
    checklists[type].checks[check].questions
  );
  const [ans, setAns] = useState({});
  const [formatAns, setFormatAns] = useState();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (cookies.ans) {
      setCookieAnswer(cookies.ans);

      if (cookies.ans[type]) {
        if (cookies.ans[type][check]) {
          //cookies.ans[type][check]
          for (const value in questions) {
            const inpAns = document.getElementById(`idInp${value}`);
            let valueCookie = cookies.ans[type][check][value];
            valueCookie ? (inpAns.value = valueCookie) : (inpAns.value = "");
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    setQuestions(checklists[type].checks[check].questions);
    if (cookies.ans) {
      setCookieAnswer(cookies.ans);

      if (cookies.ans[type]) {
        if (cookies.ans[type][check]) {
          //cookies.ans[type][check]
          for (const value in questions) {
            const inpAns = document.getElementById(`idInp${value}`);
            let valueCookie = cookies.ans[type][check][value];
            valueCookie ? (inpAns.value = valueCookie) : (inpAns.value = "");
          }
        }
      }
    }
    if (check !== "") {
      for (const value in questions) {
        const inpAns = document.getElementById(`idInp${value}`);
        setAns((prevValue) => ({
          ...prevValue,
          [check]: {
            ...prevValue[check],
            [inpAns.name]: inpAns.value,
          },
        }));
        //end's for
      }
    }
  }, [check]);

  useEffect(() => {
    let formatedAns = "";
    for (const i in questions) {
      switch (type) {
        case "schedulling":
          if (questions[i].includes("CAIXA")) {
            formatedAns =
              formatedAns +
              `¶ ${questions[i]} ${ans[check][i] ? ans[check][i] : ""}`;
            continue;
          }

          if (questions[i].includes("PORTA")) {
            formatedAns =
              formatedAns +
              ` ${questions[i]} ${ans[check][i] ? ans[check][i] : ""}\n`;
            continue;
          }

          formatedAns =
            formatedAns +
            `¶ ${questions[i]} ${ans[check][i] ? ans[check][i] : ""}\n`;

          break;

        default:
          ans[check]
            ? (formatedAns =
                formatedAns +
                `${questions[i]} \n${ans[check][i] ? ans[check][i] : ""} \n\n`)
            : "";
          break;
      }
    }

    setCookieAnswer((prevValue) => ({
      ...prevValue,
      [type]: ans,
    }));

    setFormatAns(formatedAns);
  }, [ans, questions]);

  useEffect(() => {
    setCookies("ans", cookieAnswer, { maxAge: 60 * 60 * 24 });
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
      document.getElementById(`idInp${i}`).value = "";
    }
    cookies.ans ? delete cookies.ans[type][check] : "";
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
        {/* <button
          className={styles.button}
          onClick={() => console.log("Cookies Ans: ", cookies.ans)}
        >
          Debug
        </button> */}
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
