import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <article
      className={`${props.className} ${
        props.type === "warning"
          ? classes.warning
          : props.type === "error"
          ? classes.error
          : ""
      }`}
    >
      <div className={classes.heading}>
        <b>Source:&nbsp;</b>
        <span>{props.item.source}</span>
        <span className={classes.line}>line: {props.item.line}</span>
      </div>
      <div>
        {props.type === "warning" ? (
          <span className={classes.icon}>
            <i className="fas fa-exclamation"></i>
          </span>
        ) : (
          <span className={classes.icon}>
            <i className="fas fa-times"></i>
          </span>
        )}
        <strong>{props.item.type}: </strong>
        <span>{props.item.message}</span>
      </div>
    </article>
  );
};
export default ListItem;
