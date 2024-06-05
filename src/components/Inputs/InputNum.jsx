import { useState } from "react";
import { NumberInput } from "@mantine/core";
import classes from "./Inputs.module.css";

const InputNum = ({placeholder}) => {
  const [value, setValue] = useState();
  
  return (
    <NumberInput
      value={value}
      onChange={setValue}
      classNames={{
        wrapper: classes.inputNum,
        input: classes.inputNumField,
        controls: classes.inputNumBtnWrapper,
        control: classes.inputNumBtn,

      }}
      placeholder={placeholder}
      aria-label="Number input"
      
        
      
    />
  );
};

export default InputNum;
