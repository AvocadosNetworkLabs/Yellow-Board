import React, { useEffect } from 'react';
import Styles from 'styles/Exam.module.scss';
import Ans from './Ans';

const Preguntas = ({ question, uanswers, setuanswers, canswers, key }) => {
  useEffect(() => {
    canswers.push(question.correctAns);
  }, []);
  return (
    <div className={Styles.MainContentActivitys}>
      <div>
        <p
          className={Styles.MainContentQuestionPreRCTitle}
        >{`¿ ${question.question} ?`}</p>
      </div>
      <div className={Styles.MainContentQuestionPre}>
        {question.answers.map((answers, key) => {
          let name;
          switch (key) {
            case 0:
              name = 'A';
              break;
            case 1:
              name = 'B';
              break;
            case 2:
              name = 'C';
              break;
            case 3:
              name = 'D';
              break;
          }
          return (
            <Ans
              answers={answers}
              key={key}
              name={name}
              question={question}
              setuanswers={setuanswers}
              uanswers={uanswers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Preguntas;
