import classes from './Assortment.module.css';

import basket from '../../assets/basketBlack.svg';
import tilda from '../../assets/tilda.svg';
import dialogue from '../../assets/dialogue.svg';
import sales from '../../assets/sales.svg';
import sony from '../../assets/sony.png';

import AssortmentItem from './AssortmentItem/AssortmentItem';

const ITEMS = [
  {
    id: '01',
    image: <img src={sony} alt='image'></img>,
    text: 'СОРОЧКА-ПОРТУПЕЯ В ЧОРНОМУ КОЛЬОРІ',
  },
  {
    id: '02',
    image: <img src={sony} alt='image'></img>,
    text: 'СЕТ СПІДНИЦЯ-СПОКУСНИЦЯ WHITE',
  },
  {
    id: '03',
    image: <img src={sony} alt='image'></img>,
    text: 'СОРОЧКА-ПОРТУПЕЯ В БОРДОВОМУ КОЛЬОРІ',
  },
  {
    id: '04',
    image: <img src={sony} alt='image'></img>,
    text: 'СЕТ СПОКУСА ІЗ ЦЕПОЧКОЮ НА ШИЮ',
  },
  {
    id: '05',
    image: <img src={sony} alt='image'></img>,
    text: 'СЕТ СПІДНИЦЯ-СПОКУСНИЦЯ BLACK',
  },
  {
    id: '06',
    image: <img src={sony} alt='image'></img>,
    text: 'БОДІ В ЧОРНОМУ КОЛЬОРІ',
  },
];

const Assortment = () => {
  const itemList = ITEMS.map((item) => (
    <AssortmentItem
      key={item.id}
      id={item.id}
      image={item.image}
      text={item.text}
    />
  ));
  return (
    <div className={classes.main}>
      <section className={classes.section}>
        <div className={classes.leftside}>
          <header className={classes.header}>
            Обирай те, що подобається і натискай
          </header>
          <img className={classes.basket} src={basket} alt='basket'></img>
        </div>

        <ul className={classes['text-grid']}>
          <li className={classes.item1}>
            <p>підвищь рівень інтимності</p>
          </li>
          <li className={classes.item2}>
            <p>відкрий поєднання комфорту і привабливості</p>
          </li>
          <li className={classes.item3}>
            <p>на кожен день чи особливий випадок</p>
          </li>

          <li className={classes.item4}>
            <p>акцент на комплекти</p>
          </li>
          <li className={classes.item5}>
            <p>від бюстгальтерів до стрінгів</p>
          </li>
          <li className={classes.item6}>
            <p>періодичні розпродажі для більшої доступності</p>
          </li>
          <li className={classes.item7}>
            <img className={classes.tilda} src={tilda} alt='tilda'></img>
          </li>
          <li className={classes.item8}>
            <img
              className={classes.dialogue}
              src={dialogue}
              alt='dialogue'
            ></img>
          </li>
          <li className={classes.item9}>
            <img className={classes.sales} src={sales} alt='sales'></img>
          </li>
        </ul>
      </section>

      <section className={classes.wrapper}>
        <div className={classes['header-2']}>
          <header className={classes.header}>АСОРТИМЕНТ</header>
        </div>
        <ul className={classes.img}>{itemList}</ul>
        <ul className={classes.images}>
          <li>
            <p>07</p>
            <div>
              <img src={sony} alt='image'></img>
            </div>
            <p>INTRIGUE</p>
          </li>
          <li>
            <p>08</p>
            <div>
              <img src={sony} alt='image'></img>
            </div>
            <p>IN EVERY</p>
          </li>
          <li>
            <p>09</p>
            <div>
              <img src={sony} alt='image'></img>
            </div>
            <p>DETAIL</p>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Assortment;
