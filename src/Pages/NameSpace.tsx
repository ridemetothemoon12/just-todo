import BirthInput from "Components/BirthInput";
import NameInput from "Components/NameInput";
import { ChangeEvent, useState } from "react";

function NameSpace() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const [nameSubmit, setNameSubmit] = useState(false);
  const [birthSubmit, setBirthSubmit] = useState(false);

  const onNameChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onBirthChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  return (
    <>
      <div>이름을 입력해주세요</div>
      {!nameSubmit && (
        <NameInput
          onChange={onNameChangeInput}
          setNameSubmit={setNameSubmit}
          value={name}
          placeholder="이름"
        />
      )}
      {nameSubmit && (
        <BirthInput
          setName={setName}
          setBirth={setBirth}
          onChange={onBirthChangeInput}
          setBirthSubmit={setBirthSubmit}
          setNameSubmit={setNameSubmit}
          value={birth}
          placeholder="생년월일"
        />
      )}
    </>
  );
}

export default NameSpace;
