import React from 'react';
import HashList from './HashList';

type Props = {
  selectedHash: string;
};

const InputField = (props: Props) => {
  const { selectedHash } = props;
  return (
    <>
    <h1>Selected hash: {selectedHash}</h1>
      <div className="flex flex-col w-[50%] p-4">
        <input
          type="text"
          className="border border-black"
          placeholder="Input"
        />

        <label htmlFor="format">
          <select name="Input type" id="format">
            <option value="text">Text</option>
            <option value="hex">Hex</option>
          </select>
        </label>

        <input
          type="text"
          className="border border-black"
          placeholder="Output"
        />
      </div>
    </>
  );
};

export default InputField;
