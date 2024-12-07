import React, { useEffect, useState } from 'react'

const Card = ({  userName, profileData  }) => {
  // Default profile data in case no data is fetched
  const defaultProfile = {
    login: 'aamna-ansari',
    name: 'AaMna AnSari',
    avatar_url: 'images/icon-sun', // Use default image for fallback
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non voluptates reiciendis magnam',
    public_repos: 123,
    followers: 233,
    following: 56,
    location: 'Faisalabad, Pakistan',
    blog: 'www.aamnanasari.com',
  };

  // Use fetched profileData if available, otherwise fallback to defaultProfile
  const profile = profileData || defaultProfile;



  return (
    <>
    <div className='w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center relative items-center mx-auto bg-gray-800 text-white rounded-lg mt-2 shadow-md'>
            <div className='w-full flex sm:items-start space-x-4 p-4'>
              <img className='w-20 h-20 border border-white rounded-full object-cover ' src="images/icon-sun" alt="Icon_sun" />
              <div>
                <h1 className='font-bold text-xl md:text-2xl'>{profile.name}</h1>
                <p className='text-blue-700  md:text-xl cursor-pointer hover:text-blue-800'>@{profile.login}</p>
                <h3>{profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</h3>
              </div>
            </div>
              <p className='p-3 sm:px-6'>{profile.bio}</p>

                        {/* Table Section */}
              <div className="w-full p-4 ">
    <table className="w-full  mx-auto bg-gray-900 rounded-lg text-white text-center">
      <thead>
        <tr >
          <th className="px-4 py-2">Repos</th>
          <th className="px-4 py-2">Followers</th>
          <th className="px-4 py-2">Following</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2">{profile.public_repos}</td>
          <td className="px-4 py-2">{profile.followers}</td>
          <td className="px-4 py-2">{profile.following}</td>
        </tr>
      </tbody>
    </table>
               </div>

               {/* UL */}
               <div className="p-3">
            <ul className="flex flex-col lg:flex-row lg:space-x-40 space-y-2 lg:space-y-0">
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <i className="fas fa-map-marker-alt"></i> {/* Location icon */}
                </span>
                <span>{profile.location}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <i className="fas fa-link"></i> {/* Website link icon */}
                </span>
                <a href="https://github.com/aamna-ansari" target='_blank' className="  text-white hover:underline hover:text-blue-700">
                {profile.blog}
                </a>
              </li>
            </ul>
</div>


            </div>
    </>
  )
}

export default Card