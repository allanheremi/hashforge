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
    
<ul className='flex flex-col gap-y-1 absolute w-[8rem]'>
<li className='underline font-bold'>Hash</li>
<li onClick={() => handleChange('SHA1')} className='hover:border-l-2 border-purple-200 font-semibold '>SHA1</li>
<li onClick={() => handleChange('SHA3')} className='hover:border-l-2 border-purple-200 font-semibold'>SHA3</li>
<li onClick={() => handleChange('SHA224')} className='hover:border-l-2 border-purple-200 font-semibold'>SHA224</li>
<li onClick={() => handleChange('SHA256')} className='hover:border-l-2 border-purple-200 font-semibold'>SHA256</li>
<li onClick={() => handleChange('SHA384')} className='hover:border-l-2 border-purple-200 font-semibold'>SHA384</li>
<li onClick={() => handleChange('SHA512')} className='hover:border-l-2 border-purple-200 font-semibold'>SHA512</li>
<li onClick={() => handleChange('Keccak256')} className='hover:border-l-2 border-purple-200 font-semibold'>Keccak256</li>
</ul>
    </>
  );
};

export default HashList;
