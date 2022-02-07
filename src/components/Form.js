import classes from "./Form.module.css";
import { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        className={classes.input}
        placeholder="website to validate"
        type="text"
        ref={ref}
      />
      <button className={classes.button} type="submit">
        Validate
      </button>
    </form>
  );
});

export default Form;
