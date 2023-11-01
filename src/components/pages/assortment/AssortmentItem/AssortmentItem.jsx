import classes from './AssortmentItem.module.css';

const AssortmentItem = (props) => {
  return (
    <li className={classes.wrapper}>
      <p className={classes.id}>{props.id}</p>
      <div className={classes.container}>{props.image}</div>
      <p1>{props.text}</p1>
    </li>
  );
};
export default AssortmentItem;
