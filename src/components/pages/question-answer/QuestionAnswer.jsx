import classes from './QuestionAnswer.module.css';

const QuestionAnswer = () => {
  return (
    <div id='q&a' className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes.section}>
          <p className={classes['p-styles']}>Q&A</p>
        </div>
        <div className={classes.section}>
          <ul className={classes.list}>
            <li>
              <div className={classes['space-container']}>
                <p> ЯК ЗРОБИТИ ЗАМОВЛЕННЯ?</p>
                <p>.</p>
              </div>
              <hr></hr>
            </li>
            <li>
              <div className={classes['space-container']}>
                <p> ЩО З ДОСТАВКОЮ?</p>
                <p>.</p>
              </div>

              <hr></hr>
            </li>
            <li>
              <div className={classes['space-container']}>
                <p>ЯК ШВИДКО ПРИЙДЕ ТОВАР?</p>
                <p>.</p>
              </div>

              <hr></hr>
            </li>
            <li>
              <div className={classes['space-container']}>
                <p>МОЖУ ОБМІНЯТИ ЗАМОВЛЕННЯ?</p>
                <p>.</p>
              </div>

              <hr></hr>
            </li>
            <li>
              <div className={classes['space-container']}>
                <p>ЕФЕКТ ОЧІКУВАННЯ/РЕАЛЬНІСТЬ</p>
                <p>.</p>
              </div>

              <hr></hr>
            </li>
            <li>
              <div className={classes['space-container']}>
                <p>ЯК ПІДІБРАТИ РОЗМІР?</p>
                <p>.</p>
              </div>
              <hr></hr>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
