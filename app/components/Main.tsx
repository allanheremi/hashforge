'use client';
import React, { useState } from 'react';
import InputField from './InputField';
import HashList from './HashList';

type Props = {};

function Main({}: Props) {
  const [selectedHash, setSelectedHash] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [currentOutput, setCurrentOutput] = useState('');

  return (
    <>
      <main className="">
        <div className="w-[-30%] flex flex-row-reverse text-center">
          <HashList
            selectedHash={setSelectedHash}
            setSelectedHash={setSelectedHash}
          />
        </div>
        <h1 className="px-4">Selected hash: {selectedHash}</h1>
        <h1>Current input = {currentInput}</h1>
        <h1 >Current output = {currentOutput}</h1>
        <InputField
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          currentOutput={currentOutput}
          setCurrentOutput={setCurrentOutput}
        />
      </main>
    </>
  );
}

export default Main;
