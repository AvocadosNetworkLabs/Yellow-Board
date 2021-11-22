import React, { useEffect } from 'react';
import Styles from 'styles/Exam.module.scss';

const Ans = ({ answers, key, name, question, setuanswers, uanswers }) => {
  return (
    <label key={key} className={Styles.MainContentPInput} htmlFor="answare">
      <input
        name={`${question.question}`}
        type="radio"
        value={name}
        onChange={(e) => {
          setuanswers({ ...uanswers, [e.target.name]: e.target.value });
          console.log('user ans: ', uanswers);
        }}
      />
      <span>{` ${name}) ${answers} `}</span>
    </label>
  );
};

export default Ans;
