'use client';
import React from 'react';
const crypto = require('crypto-js');

type Props = {
  currentInput: any;
  setCurrentInput: any;
  currentOutput: any;
  setCurrentOutput: any;
};

const InputField = ({
  currentInput,
  setCurrentInput,
  currentOutput,
  setCurrentOutput,
}: Props) => {
  
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setCurrentInput(newValue);

    const hash = crypto.SHA256(newValue).toString();
    setCurrentOutput(hash);
  };

  return (
    <>
      <div className="flex flex-col w-[50%] p-4">
        <input
          type="text"
          className="border border-black"
          placeholder="Input"
          onChange={handleInputChange}
          value={currentInput}
        />

        <input
          type="text"
          className="border border-black"
          placeholder="Output"
          value={currentOutput}
          readOnly
        />
      </div>
    </>
  );
};

export default InputField;
