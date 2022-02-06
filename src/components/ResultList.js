import classes from "./ResultList.module.css";
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
        <span>Source: </span>
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
        <span>{props.item.type}: </span>
        <span>{props.item.message}</span>
      </div>
    </article>
  );
};
const ResultList = (props) => {
  console.log("list running");
  const lists = props.lists.map((item, idx) => (
    <ListItem
      className={classes.list}
      item={item}
      type={props.type}
      key={idx}
    />
  ));
  return <article className={classes.lists}>{lists}</article>;
};

export default ResultList;
