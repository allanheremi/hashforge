'use client'
import React, { useState } from 'react'
import InputField from './InputField'
import HashList from './HashList'

type Props = {}

function Main({}: Props) {
   const [selectedHash, setSelectedHash] = useState('')

  return (
 <>
 <main className=''>
    <div className='w-[-30%] flex flex-row-reverse text-center'>

 <HashList selectedHash={setSelectedHash} setSelectedHash={setSelectedHash}/>   
    </div>
    <h1 className='px-4'>Selected hash: {selectedHash}</h1>
 <InputField />


 </main>

 </>
  )
}

export default Main