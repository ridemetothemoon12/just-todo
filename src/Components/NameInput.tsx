import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import Button from "./Atoms/Button";
import Input from "./Atoms/Input";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
  setNameSubmit: Dispatch<SetStateAction<boolean>>;
}

const NameInput = ({ onChange, value, placeholder, setNameSubmit }: Props) => {
  return (
    <>
      <Input onChange={onChange} placeholder={placeholder} value={value} />
      <Button onClick={() => setNameSubmit(true)} disabled={!value}>
        다음
      </Button>
    </>
  );
};

export default NameInput;
