import classes from './AssortmentItem.module.css';

const AssortmentItem = (props) => {
  return (
    <li className={classes.wrapper}>
      <p className={classes.id}>{props.id}</p>
      <div className={classes.container}>{props.image}</div>
      <p>{props.text}</p>
    </li>
  );
};
export default AssortmentItem;
