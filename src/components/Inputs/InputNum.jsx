import { useState } from "react";
import { NumberInput } from "@mantine/core";
import classes from "./Inputs.module.css";

const InputNum = ({ placeholder, min, max, clearFilter, label, id }) => {
  const [value, setValue] = useState("");

  const clearFilterInput = () => {
    setValue("");
    setValue("");

  };

  if (clearFilter) {
    clearFilter.clearFilterInput = clearFilterInput;
  }

  return (
    <NumberInput
      id={id}
      label={label}
      value={value}
      onChange={setValue}
      classNames={{
        wrapper: classes.inputNum,
        root: classes.inpuNumRoot,
        input: classes.inputNumField,
        controls: classes.inputNumBtnWrapper,
        control: classes.inputNumBtn,
        label: classes.inputNumLabel,
      }}
      placeholder={value.length > 0 ? value : placeholder}
      aria-label="Number input"
      min={min}
      max={max}
    />
  );
};

export default InputNum;
