'use client';
import React from 'react';
import { keccak256, toUtf8Bytes } from 'ethers';
import { ethers } from 'ethers';
const crypto = require('crypto-js');

type Props = {
  currentInput: any;
  setCurrentInput: any;
  currentOutput: any;
  setCurrentOutput: any;
  selectedHash: any;
  setSelectedHash: any;
};

const InputField = ({
  currentInput,
  setCurrentInput,
  currentOutput,
  setCurrentOutput,
  selectedHash,
  setSelectedHash,
}: Props) => {

  const handleInputChange = (e: any, selectedHash: any) => {
    console.log(selectedHash)


    if(selectedHash === 'SHA1') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = crypto.SHA1(newValue).toString();
      setCurrentOutput(hash);
    }


    if(selectedHash === 'SHA3') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = crypto.SHA3(newValue).toString();
      setCurrentOutput(hash);
    }

    if(selectedHash === 'SHA224') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = crypto.SHA224(newValue).toString();
      setCurrentOutput(hash);
    }

        if (selectedHash === 'SHA256') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = crypto.SHA256(newValue).toString();
      setCurrentOutput(hash);
    }

    if(selectedHash === 'SHA384') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = crypto.SHA384(newValue).toString();
      setCurrentOutput(hash);
    }

    if(selectedHash === 'SHA512') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = crypto.SHA512(newValue).toString();
      setCurrentOutput(hash);
    }

    if(selectedHash === 'Keccak256') {
      const newValue = e.target.value;
      setCurrentInput(newValue);
      const hash = keccak256(toUtf8Bytes(newValue))
     // const hash = ethers.keccak256(newValue).toString();
      setCurrentOutput(hash);
    }

  };

  return (
    <>
      <div className="flex flex-col w-[85%] p-4 sm:w-[164px]">
        <input
          type="text"
          className="border border-black h-[6rem] placeholder:text-center text-center"
          placeholder="Type text to hash here"
          onChange={e => handleInputChange(e, selectedHash)}
          value={currentInput}
        />
<span className='text-center py-4'>Type above to convert to selected hash</span>
        <input
          type="text"
          className="border border-black h-[6rem] placeholder:text-center text-[0.7rem] text-center sm:w-[50%]"
          placeholder="Hash output"
          value={currentOutput}
          readOnly
        />
      </div>
    </>
  );
};

export default InputField;
