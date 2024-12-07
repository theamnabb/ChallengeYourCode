import React from 'react'

const Card = () => {
  return (
    <>
    <div className='w-2/4 flex flex-col justify-center relative items-center mx-auto bg-gray-800 text-white rounded-lg mt-5 shadow-md'>
            <img src="/images/icon-sun" alt="Sun Icon" />
        <div>
            <h1 className='font-bold'>Github user</h1>
            <p>userlink</p>
            <p>joined</p>
        </div>
        <p className='m-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

        <div className='bg-gray-900 rounded-lg grid grid-cols-3 gap-10 py-5 w-2/3 text-center'>
            <div>Repos</div>
            <div>Followers</div>            
            <div>Following</div>            
        </div>

        <p className='m-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quam aliquam eveniet asperiores libero numquam iste dolore voluptates ad, molestias, dolorem quis! Ducimus excepturi alias ex exercitationem mollitia blanditiis possimus.</p>
    </div>
    </>
  )
}

export default Card