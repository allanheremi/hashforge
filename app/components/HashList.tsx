'use client'
import React, { useState } from 'react';
const crypto = require('crypto-js')
const Keccak256 = require('keccak256')

type Props = {};

const HashList = (props: Props) => {
const [selectedHash, setSelectedHash] = useState('')


  return (
    <>
    
<ul className='flex flex-col px-4 gap-1 absolute'>
<li className='text-xl underline'>Hash</li>
<li onClick={() => setSelectedHash('SHA1')}>SHA1</li>
<li onClick={() => setSelectedHash('SHA2')}>SHA2</li>
<li onClick={() => setSelectedHash('SHA3')}>SHA3</li>
<li onClick={() => setSelectedHash('SHA224')}>SHA224</li>
<li onClick={() => setSelectedHash('SHA384')}>SHA384</li>
<li onClick={() => setSelectedHash('SHA512')}>SHA512</li>
<li onClick={() => setSelectedHash('Keccak256')}>Keccak256</li>
</ul>
    </>
  );
};

export default HashList;
