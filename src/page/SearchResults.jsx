// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import UserCard from '../components/UserCard';
// import usersData from '../assets/users.json';
// import EmptyState from '../components/EmptyState';
// import NavResult from '../components/NavResult';

// const SearchResults = ({ query, setQuery }) => {
//   const [results, setResults] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null); // Track selected user for modal

//   useEffect(() => {
//     const normalizedQuery = query.toLowerCase();
//     const filteredUsers = usersData.filter(user =>
//       user.first_name.toLowerCase().includes(normalizedQuery) ||
//       user.last_name.toLowerCase().includes(normalizedQuery)
//     );
//     setResults(filteredUsers);
//   }, [query]);

//   const handleFetchDetails = (user) => {
//     setSelectedUser(user);
//   };

//   const handleCloseModal = () => {
//     setSelectedUser(null);
//   };

//   return (
//     <div
//       className={`min-h-screen bg-[linear-gradient(180deg,_#F4F4F5_0%,_#D9E6FF_100%)] ${results.length === 0 ? 'h-screen' : ''
//         }`}
//     >
//       <NavResult onSearch={setQuery} />

//       {results.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-64 mr-64 ">
//           {results.map(user => (
//             <UserCard key={user.contact_number} user={user} onFetchDetails={handleFetchDetails} />
//           ))}
//         </div>
//       ) : (
//         <EmptyState />
//       )}

//       {selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-xl font-semibold mb-4">Fetch Details</h2>
//             <h3 className='-mt-2 mb-1 text-sm text-gray-400'>Here are the details of the following employee.</h3>
//             <p>
//               <strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}
//             </p>
//             <p>
//               <strong>Location:</strong> {selectedUser.city}
//             </p>
//             <p>
//               <strong>Contact Number:</strong> {selectedUser.contact_number}
//             </p>
//             <h1 className='font-medium m-1' >Profile Image:</h1>
//             <div className="w-full h-40 bg-gray-200 rounded-lg mt-4 overflow-hidden">
//               <img
//                 src="/Group.png"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <button
//               onClick={handleCloseModal}
//               className="mt-4 ml-[17em]  px-4 py-2 bg-white text-black rounded-lg hover:bg-red-700 transition-all"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// SearchResults.propTypes = {
//   query: PropTypes.string.isRequired,
//   setQuery: PropTypes.func.isRequired,
// };

// export default SearchResults;




import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/UserCard';
import usersData from '../assets/users.json';
import EmptyState from '../components/EmptyState';
import NavResult from '../components/NavResult';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // Add Dialog components

const SearchResults = ({ query, setQuery }) => {
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user for modal

  useEffect(() => {
    const normalizedQuery = query.toLowerCase();
    const filteredUsers = usersData.filter(user =>
      user.first_name.toLowerCase().includes(normalizedQuery) ||
      user.last_name.toLowerCase().includes(normalizedQuery)
    );
    setResults(filteredUsers);
  }, [query]);

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div
      className={`min-h-screen bg-[linear-gradient(180deg,_#F4F4F5_0%,_#D9E6FF_100%)] ${results.length === 0 ? 'h-screen' : ''}`}
    >
      <NavResult onSearch={setQuery} />

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-64 mr-64">
          {results.map(user => (
            <UserCard key={user.contact_number} user={user} onFetchDetails={handleFetchDetails} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {selectedUser && (
        <Dialog open={true} onOpenChange={handleCloseModal}>

          <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
            <DialogTitle className="text-xl font-semibold">User Details</DialogTitle>
            <DialogDescription>
              <h3 className="text-sm text-gray-400 mb-2">Here are the details of the following employee.</h3>
              <p><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
              <p><strong>Location:</strong> {selectedUser.city}</p>
              <p><strong>Contact Number:</strong> {selectedUser.contact_number}</p>
              <h1 className="font-medium m-1">Profile Image:</h1>
              <div className="w-full h-40 bg-gray-200 rounded-lg mt-4 overflow-hidden">
                <img
                  src="/imagess.png" // Ensure the path is correct
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-white text-black rounded-lg hover:bg-red-700 transition-all"
                >
                  Close
                </button>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchResults;
