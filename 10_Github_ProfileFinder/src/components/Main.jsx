import Card from './Card'
import  Input  from './Input'
import React, { useState } from 'react'

const Main = () => {
//   const [username, setUsername] = useState(''); // username (to store the input value).
//   const [userData, setUserData] = useState(null); // userData (to store the fetched data)
  
//   const handleUsername = (e) => {
//     console.log(setUsername(e.target.value));
    
// };

  
  return (
    <>
    <main className='p-4'>
    <Input/>
    <Card/>
    </main>
    </>
  )
}

export default Main