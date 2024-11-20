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





// import PropTypes from 'prop-types';
// import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
// // import { Avatar } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogTrigger } from "@/components/ui/dialog";  // Import Dialog components from Shadcn UI

// const UserCard = ({ user, onFetchDetails }) => {
//   return (
//     <Card className="w-full max-w-md  mb-5 bg-white border border-gray-200 shadow-lg">
//       {/* Card Header with Avatar */}
//       <CardHeader className="flex flex-col items-center">
//         <img
//           src="/imagess.png" // Ensure the image path is correct
//           alt="User Profile"
//           className="w-16 h-16 mb-3 object-cover"
//         />
//         <CardTitle className="text-lg font-semibold text-gray-800">
//           {user.first_name} {user.last_name}
//         </CardTitle>
//       </CardHeader>

//       {/* Card Content */}
//       <CardContent className="text-center">
//         <p className="text-sm text-gray-500 flex justify-center items-center mb-3">
//           <span className="material-icons text-sm mr-1 text-gray-400">
//             <img src='/Frame66.png' alt="Location Icon" className="w-4 h-4" />
//           </span>
//           {user.city}
//         </p>
//       </CardContent>

//       Card Footer
//       <CardFooter className="flex  items-center justify-between border-t pt-4">
//         <div className="flex-1 border text-sm text-gray-600 flex flex-col items-start">
//           <span className="flex items-center font-medium text-black">
//             <img
//               src="/Vector.png"  // Ensure the phone icon path is correct
//               alt="Phone Icon"
//               className="mr-2 w-4 h-4 object-contain"
//             />
//             {user.contact_number}
//           </span>
//           <span className="text-xs text-gray-400 mt-1">Available on phone</span>
//         </div>

//         {/* Dialog for Fetch Details */}
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button
//               onClick={() => onFetchDetails(user)}
//               className="bg-black text-white hover:bg-gray-800 px-4 py-1 text-sm rounded-lg"
//             >
//               Fetch Details
//             </Button>
//           </DialogTrigger>
//         </Dialog>
//       </CardFooter>
//     </Card>
//   );
// };

// UserCard.propTypes = {
//   user: PropTypes.shape({
//     first_name: PropTypes.string.isRequired,
//     last_name: PropTypes.string.isRequired,
//     city: PropTypes.string.isRequired,
//     contact_number: PropTypes.string.isRequired,
//   }).isRequired,
//   onFetchDetails: PropTypes.func.isRequired,
// };

// export default UserCard;
