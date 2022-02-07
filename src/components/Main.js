import { useEffect, useRef } from "react";
import useCSSValidator from "./hooks/use-cssValidator";
import ResultView from "./ResultView";
import classes from "./Main.module.css";
import Form from "./Form";

const Main = (props) => {
  const [{ data, isLoading, error, isSuccess }, submitURL] = useCSSValidator();
  const inputRef = useRef();
  // console.log("Main Running");
  const submitHandler = (event) => {
    event.preventDefault();
    submitURL(inputRef.current.value);
  };
  useEffect(() => {
    if (isSuccess || error) {
      inputRef.current.value = "";
    }
  }, [isSuccess, error]);
  return (
    <div className={classes.main}>
      <Form ref={inputRef} onSubmit={submitHandler} />
      <div>{isLoading ? "Loading..." : error ? error.message : ""}</div>
      <div>{data && <ResultView results={data.cssvalidation} />}</div>
    </div>
  );
};

export default Main;
