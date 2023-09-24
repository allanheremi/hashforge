'use client';
import React, { useState } from 'react';
import InputField from './InputField';
import HashList from './HashList';

type Props = {};

function Main({}: Props) {
  const [selectedHash, setSelectedHash] = useState('SHA256');
  const [currentInput, setCurrentInput] = useState('');
  const [currentOutput, setCurrentOutput] = useState('');

  return (
    <>
      <main className="h-screen p-8">
        <div className="w-[-10%] flex flex-row-reverse text-center ">
          <HashList
            selectedHash={setSelectedHash}
            setSelectedHash={setSelectedHash}
          />
        </div>
        <h1 className="px-4 font-bold underline">Selected hash: {selectedHash}</h1>
      
    
        <InputField
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          currentOutput={currentOutput}
          setCurrentOutput={setCurrentOutput}
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />
        <div className='border border-black w-[64%] text-center h-fit rounded-md bg-purple-200'>
<span className='text-[1rem] break-words overflow-auto '>Output: 
<br/>
<br/>
 {currentOutput}</span>

</div>
      </main>
    </>
  );
}

export default Main;
