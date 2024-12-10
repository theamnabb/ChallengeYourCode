const Card = ({ data }) => {
  if (!data) return <div>No user data found</div>; // Check if data is available

  // Format the date
  const formattedDate = new Date(data.created_at).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center relative items-center mx-auto dark:bg-gray-800 bg-white dark:text-white text-gray-800 rounded-lg mt-2 drop-shadow-2xl">
      <div className="w-full flex sm:items-start space-x-4 p-4">
        {/* Avatar */}
        <img className="w-20 h-20 border border-white rounded-full object-cover" src={data.avatar_url} alt="Avatar" />
        
        {/* User Details */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between w-full sm:w-auto space-y-2 sm:space-y-0">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">{data.name}</h1>
            <a href={data.html_url} target="_blank" className="text-blue-700 no-underline md:text-xl cursor-pointer hover:text-blue-800">{`@${data.login}`}</a>
            <h3>Joined {formattedDate}</h3>
          </div>
        </div>
      </div>

      {/* Bio Section - aligned to the left */}
      <div className=" text-gray-400 p-3 sm:p-6">
        <p>{data.bio || "No bio available"}</p>
      </div>

 
      {/* Table Section */}
      <div className="w-full p-4">
        <table className="w-full mx-auto dark:bg-gray-900 bg-slate-200 rounded-lg text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Repos</th>
              <th className="px-4 py-2">Followers</th>
              <th className="px-4 py-2">Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">{data.public_repos}</td>
              <td className="px-4 py-2">{data.followers}</td>
              <td className="px-4 py-2">{data.following}</td>
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
            <span>{data.location || 'Not Available'}</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gray-500">
              <i className="fas fa-link"></i> {/* Website link icon */}
            </span>
            <a href={data.html_url} target="_blank" className="hover:underline hover:text-blue-700">
              {data.html_url || 'Not Available'}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
