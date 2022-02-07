import ListItem from "./ListItem";
import classes from "./ResultList.module.css";

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
  return (
    <article className={classes.lists}>
      <p>
        <strong>{props.type}:&nbsp;</strong>
        <span>{props.lists.length + 1}</span>
      </p>
      {lists}
    </article>
  );
};

export default ResultList;
