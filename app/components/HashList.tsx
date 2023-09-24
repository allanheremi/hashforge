'use client'
import React, { useState } from 'react';
const crypto = require('crypto-js')
const Keccak256 = require('keccak256')

type Props = {
  selectedHash: any,
  setSelectedHash: (string: string) => void
};

const HashList = ({selectedHash, setSelectedHash}: Props) => {
 
  const handleChange = (e : string) => {
    setSelectedHash(e)
  }


  return (
    <>
    
<ul className='flex flex-col px-4 gap-1 absolute'>
<li className='text-l underline'>Hashing function</li>
<li onClick={() => handleChange('SHA1')}>SHA1</li>
<li onClick={() => handleChange('SHA3')}>SHA3</li>
<li onClick={() => handleChange('SHA224')}>SHA224</li>
<li onClick={() => handleChange('SHA256')}>SHA256</li>
<li onClick={() => handleChange('SHA384')}>SHA384</li>
<li onClick={() => handleChange('SHA512')}>SHA512</li>
<li onClick={() => handleChange('Keccak256')}>Keccak256</li>
</ul>
    </>
  );
};

export default HashList;
