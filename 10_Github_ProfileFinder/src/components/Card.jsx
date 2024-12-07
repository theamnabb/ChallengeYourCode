import React from 'react'

const Card = () => {
  return (
    <>
    <div className='w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center relative items-center mx-auto bg-gray-800 text-white rounded-lg mt-2 shadow-md'>
            <div className='w-full flex sm:items-start space-x-4 p-4'>
              <img className='w-20 h-20 border border-white rounded-full object-cover ' src="images/icon-sun" alt="Icon_sun" />
              <div>
                <h1 className='font-bold text-xl md:text-2xl'>AaMna AnSari</h1>
                <p className='text-blue-700  md:text-xl cursor-pointer hover:text-blue-800'>@aamna-ansari</p>
                <h3>Joined 3 Jun 2023</h3>
              </div>
            </div>
              <p className='p-3 sm:px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non voluptates reiciendis magnam</p>

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
          <td className="px-4 py-2">123</td>
          <td className="px-4 py-2">233</td>
          <td className="px-4 py-2">5K.6</td>
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
                <span>Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <i className="fas fa-link"></i> {/* Website link icon */}
                </span>
                <a href="https://github.com/aamna-ansari" target='_blank' className="  text-white hover:underline hover:text-blue-700">
                   www.aamnanasari.com
                </a>
              </li>
            </ul>
</div>


            </div>
    </>
  )
}

export default Card