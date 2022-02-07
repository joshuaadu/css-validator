import { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" ref={ref} />
      <button type="submit">Validate</button>
    </form>
  );
});

export default Form;
