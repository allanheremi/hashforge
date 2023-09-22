import Image from 'next/image';
import Header from './components/Header';
import InputHeader from './components/InputHeader';
import InputField from './components/InputField';

import Selection from './components/Selection'; 
import HashList from './components/HashList';
export default function Home() {
  return (
    <>
      <Header />
      <InputHeader />
      <InputField/>
      <Selection /> 
      <InputField/>
      <HashList/>
    </>
  );
}
