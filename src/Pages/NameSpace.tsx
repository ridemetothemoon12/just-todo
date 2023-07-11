import Radio from "Components/Atoms/Radio";
import BirthInput from "Components/BirthInput";
import GeoLocation from "Components/GeoLocation";
import NameInput from "Components/NameInput";

import { ChangeEvent, useState } from "react";

function NameSpace() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const [nameSubmit, setNameSubmit] = useState(false);
  const [birthSubmit, setBirthSubmit] = useState(false);

  const [locationSubmit, setLocationSubmit] = useState(false);

  const [selectedDataSets, setSelectedDataSets] = useState<string[]>([]);

  const data = [
    [
      { title: "1-1", value: "답안1-1" },
      { title: "1-2", value: "답안1-2" },
      { title: "1-3", value: "답안1-3" },
      { title: "1-4", value: "답안1-4" },
    ],
    [
      { title: "2-1", value: "답안2-1" },
      { title: "2-2", value: "답안2-2" },
      { title: "2-3", value: "답안2-3" },
      { title: "2-4", value: "답안2-4" },
    ],
    [
      { title: "3-1", value: "답안3-1" },
      { title: "3-2", value: "답안3-2" },
      { title: "3-3", value: "답안3-3" },
      { title: "3-4", value: "답안3-4" },
    ],
  ];

  const onNameChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onBirthChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  return (
    <>
      {!nameSubmit && <div>이름을 입력해주세요</div>}
      {!nameSubmit && (
        <NameInput
          onChange={onNameChangeInput}
          setNameSubmit={setNameSubmit}
          value={name}
          placeholder="이름"
        />
      )}
      {nameSubmit && !birthSubmit && (
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
      {birthSubmit && !locationSubmit && (
        <GeoLocation setLocationSubmit={setLocationSubmit} />
      )}

      {nameSubmit &&
        birthSubmit &&
        locationSubmit &&
        data.map((e, index) => {
          return (
            <Radio
              question={`선택지 ${index}번`}
              name={`q${index}`}
              data={e}
              targetIndex={index}
              selectedDataSets={selectedDataSets}
              setSelectedDataSets={setSelectedDataSets}
            />
          );
        })}
    </>
  );
}

export default NameSpace;
