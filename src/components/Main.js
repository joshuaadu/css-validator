import { useRef } from "react";
import useCSSValidator from "./hooks/use-cssValidator";
import ResultView from "./ResultView";
import classes from "./Main.module.css";

const Main = (props) => {
  const inputRef = useRef();

  console.log("Main Running");
  const [{ data, isLoading, error }, submitURL] = useCSSValidator();
  const submitHandler = (event) => {
    event.preventDefault();
    submitURL(inputRef.current.value);
  };
  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Validate</button>
      </form>
      <div>{isLoading ? "Loading..." : error ? error.message : ""}</div>
      <div>{data && <ResultView results={data.cssvalidation} />}</div>
    </div>
  );
};

export default Main;
