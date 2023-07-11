import { Dispatch, MouseEvent, SetStateAction } from "react";

type DatasProps = {
  targetIndex: number;
  selectedDataSets: string[];
  setSelectedDataSets: Dispatch<SetStateAction<string[]>>;
  question: string;
  name: string;
  data: {
    title: string;
    value: string;
  }[];
};

const Radio = ({
  data,
  question,
  name,
  selectedDataSets,
  setSelectedDataSets,
  targetIndex,
}: DatasProps) => {
  const onHandleAnswer = (e: MouseEvent<HTMLInputElement>) => {
    if (selectedDataSets.length !== 3) {
      return setSelectedDataSets([...selectedDataSets, e.currentTarget.value]);
    }
    const reAllocatedDataSets = [...selectedDataSets];
    reAllocatedDataSets[targetIndex] = e.currentTarget.value;
    setSelectedDataSets(reAllocatedDataSets);
  };

  return (
    <>
      <div>{question}</div>
      {data.map((e) => (
        <div key={e.title}>
          <input
            id={e.title}
            type="radio"
            value={e.value}
            name={name}
            onClick={(e: MouseEvent<HTMLInputElement>) => onHandleAnswer(e)}
          />
          <label htmlFor={e.title}>{e.title}</label>
        </div>
      ))}
    </>
  );
};

export default Radio;
