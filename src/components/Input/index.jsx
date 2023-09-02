import { useState } from "react";
import { FormFeedback, Input } from "reactstrap";

export const InputComponent = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
  invalid,
  ...rests
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleOnBlur = () => {
    setIsFocused(true)
  }

  const handleOnchange = (e) => {
    if(onChange) {
        onChange(name, e.target.value)
    }
  }
  
  return (
    <>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleOnchange}
        onBlur={handleOnBlur}
        invalid={isFocused && Boolean(invalid)}
        {...rests}
      />
      <FormFeedback>{isFocused && invalid}</FormFeedback>
    </>
  );
};
