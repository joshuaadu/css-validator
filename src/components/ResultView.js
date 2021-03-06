import { Fragment } from "react";
import ResultList from "./ResultList";

const ResultView = (props) => {
  console.log(props.results);
  const date = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(new Date(props.results.date));
  return (
    <Fragment>
      <section>
        <h2>Results</h2>
        <div>
          <b>Validated URL: </b>
          <a href={props.results.uri}>{props.results.uri}</a>
        </div>
        <div>
          <b>Validated By: </b>
          <a href={props.results.checkedby}>{props.results.checkedby}</a>
        </div>
        <div>
          <b>Time of validation: </b>
          {date}
        </div>
      </section>
      {props.results.errors && (
        <ResultList lists={props.results.errors} type="error" />
      )}
      {props.results.warnings && (
        <ResultList lists={props.results.warnings} type="warning" />
      )}
    </Fragment>
  );
};

export default ResultView;
