import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import Button from "./Atoms/Button";
import Input from "./Atoms/Input";

interface Props {
  setName: Dispatch<SetStateAction<string>>;
  setBirth: Dispatch<SetStateAction<string>>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
  setBirthSubmit: Dispatch<SetStateAction<boolean>>;
  setNameSubmit: Dispatch<SetStateAction<boolean>>;
}

const BirthInput = ({
  setName,
  setBirth,
  onChange,
  value,
  placeholder,
  setBirthSubmit,
  setNameSubmit,
}: Props) => {
  const resetHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName("");
    setBirth("");
    setBirthSubmit(false);
    setNameSubmit(false);
  };

  return (
    <>
      <Input onChange={onChange} placeholder={placeholder} value={value} />
      <Button onClick={() => setBirthSubmit(true)} disabled={!value}>
        다음
      </Button>
      <Button onClick={resetHandler}>리셋</Button>
    </>
  );
};

export default BirthInput;
