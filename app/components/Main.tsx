import React from 'react'
import InputField from './InputField'
import HashList from './HashList'

type Props = {}

function Main({}: Props) {
  return (
 <>
 <main className=''>
    <div className='w-[-30%] flex flex-row-reverse text-center'>

 <HashList />   
    </div>
 <InputField selectedHash={''}/>


 </main>

 </>
  )
}

export default Main