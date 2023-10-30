import classes from './Reviews.module.css';
import icon from '../../assets/reviews/icon.svg';
import fill from '../../assets/reviews/blackSquare.svg';
import rightArrow from '../../assets/reviews/rightArrow.svg';
import leftArrow from '../../assets/reviews/leftArrow.svg';

const Reviews = () => {
  return (
    <div id='reviews' className={classes.wrapper}>
      <div className={classes.section}>
        <div className={classes['content-margin']}>
          <p> ВІДГУКИ</p>
          <img src={icon} alt='icon'></img>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes['arrow-margin']}>
          <img src={leftArrow} alt='left arrow' />
        </div>
        <ul className={classes['review-grid']}>
          <li>
            <img src={fill} alt='review' />
          </li>
          <li>
            <img src={fill} alt='review' />
          </li>
          <li>
            <img src={fill} alt='review' />
          </li>
          <li>
            <img src={fill} alt='review' />
          </li>
          <li>
            <img src={fill} alt='review' />
          </li>
          <li>
            <img src={fill} alt='review' />
          </li>
        </ul>
        <div className={classes['arrow-margin']}>
          <img src={rightArrow} alt='right arrow' />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
