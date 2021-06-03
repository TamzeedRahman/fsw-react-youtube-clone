import React from "react";
import "./Form.css";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div className="formcomment"> 
    {/* not following camel case convention  */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="leave a comment"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
