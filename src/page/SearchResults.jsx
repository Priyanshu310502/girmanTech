import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/UserCard';
import usersData from '../assets/users.json';
import EmptyState from '../components/EmptyState';
import NavResult from '../components/NavResult';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // Add Dialog components
import { Link } from 'react-router-dom';

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
    <div className={`min-h-screen bg-[linear-gradient(180deg,_#F4F4F5_0%,_#D9E6FF_100%)]`}>
      <NavResult onSearch={setQuery} />

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-64">
          {results.map(user => (
            <UserCard key={user.contact_number} user={user} onFetchDetails={handleFetchDetails} />
          ))}
        </div>
      ) : (
        <Link to={'/notfound'}>
          <EmptyState />
        </Link>
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