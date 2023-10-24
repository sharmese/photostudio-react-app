import classes from './About.module.css';
import background from '../../assets/about/background.png';

const About = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes['content-wrapper']}>
          <div className={classes['first-style']}>
            <p> наша маленька історія</p>
            <h1>ПРО МАГАЗИН</h1>
          </div>
          <div className={classes['second-style']}>
            <h1>ПЕРЕТВОРИ КОЖНУ МИТЬ В ОСОБЛИВУ...</h1>
          </div>
        </div>

        <ul className={classes.list}>
          <li>
            <p className={classes['p-margin']}>народжений із стійкості </p>
            <p>
              Створення онлайн-магазину нижньої білизни Asuna у зиму 2022 року
              було історією натхнення та рішучості, народженою в найважчі часи.
            </p>
          </li>
          <li>
            <p>
              Заснування було далекоглядним і непохитним рішенням, адже ми
              побачили можливість створити щось унікальне українське, те, що не
              лише скрасить дні, а й додасть сили кожній жінці. Таким чином,
              Асуна була задумана серед темряви - маяк світла, елегантності та
              доступної розкоші.
            </p>
          </li>
          <li>
            <p>
              Інтернет-магазин був не просто ринком нижньої білизни; це було
              свідченням розширення можливостей, надії та непохитної віри в
              красу кожної української жінки.
            </p>
          </li>
        </ul>
      </div>
      <div className={classes.background}>
        <img src={background} alt={background}></img>
      </div>
    </div>
  );
};
export default About;
