import PropTypes from 'prop-types';

const UserCard = ({ user, onFetchDetails }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-sm mx-auto border border-gray-200 mb-5">
      {/* User Profile Image */}
      <div className="w-16 h-16 -ml-36 rounded-full bg-gray-200 mb-4 overflow-hidden">
        <img
          src="/imagess.png" // Replace with the actual image path
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Name */}
      <h3 className="text-lg font-semibold -ml-24 text-gray-800 mb-1">
        {user.first_name} {user.last_name}
      </h3>

      {/* User City */}
      <p className="text-sm text-gray-500 flex items-center -ml-36 mb-3">
        <span className="material-icons text-sm mr-1 text-gray-400">
          <img src='/Frame66.png' alt='location' className='' />
        </span>
        {user.city}
      </p>

      {/* Contact Information */}
      <div className="w-full flex justify-between items-center border-t pt-4">
        <div className="flex-1 flex flex-col items-start text-[12px] text-gray-600">
          <span className="flex items-center text-black font-medium">
            <img
              src="/Vector.png"
              alt="Phone Icon"
              className="mr-2 w-4 h-4 object-contain"
            />
            {user.contact_number}
          </span>
          <span className="text-xs text-gray-400 mt-1">Available on phone</span>
        </div>

        {/* Fetch Details Button */}
        <button
          onClick={() => onFetchDetails(user)}
          className="px-2 py-1 text-white bg-black rounded-lg hover:bg-gray-800 transition-all text-[12px]"
        >
          Fetch Details
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    contact_number: PropTypes.string.isRequired,
  }).isRequired,
  onFetchDetails: PropTypes.func.isRequired,
};

export default UserCard;

