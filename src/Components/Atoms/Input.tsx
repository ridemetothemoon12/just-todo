import { ChangeEventHandler } from "react";

const Input = ({
  onChange,
  value,
  placeholder,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
}) => {
  return <input value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
