import React from "react";
import "./DigitalInput.css";
export default function DigitInput(props) {
  const handleEnter = (event) => {
    const { value, name } = event.target;
    props.setCardDetails({
      ...props.cardDetails,
      [name]: value,
    });
    if (event.target.value.length >= 4) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
    const f = event.target.form;

    const index = [...f].indexOf(event.target);
    if (index >= 1 && event.target.value === "") {
      const form = event.target.form;
      form.elements[index - 1].focus();
      console.log("index");
      event.preventDefault();
    }
  };
  return (
    <form className="main">
      <input
        onChange={handleEnter}
        maxLength="4"
        placeholder="4 digit"
        name="first"
      />
      <input
        onChange={handleEnter}
        maxLength="4"
        placeholder="8 digit"
        name="second"
      />
      <input
        onChange={handleEnter}
        maxLength="4"
        placeholder="12 digit"
        name="third"
      />
      <input
        onChange={handleEnter}
        maxLength="4"
        placeholder="16 digit"
        name="fourth"
      />

      {/* <input placeholder="field 3" maxLength="4" /> */}
    </form>
  );
}
