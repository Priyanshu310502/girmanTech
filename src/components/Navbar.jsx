import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [showEmailError, setShowEmailError] = useState(false); // State to manage email error message display
  const [emailClicked, setEmailClicked] = useState(false); // Flag to track if email button was clicked

  // Function to handle the email client opening
  const handleEmailClick = () => {
    setEmailClicked(true); // Set the flag that the email button was clicked

    const subject = "Request for Software Engineer Intern at Girmantech";
    const body = "Dear Hiring Manager,\n\nI would like to apply for the Software Engineer Intern position at Girmantech. Please find my details below.....\n\n";
    const mailtoLink = `mailto:contact@girmantech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoLink;

    // Wait for 5 seconds to check if mailto action was successful
    setTimeout(() => {
      // Check if the email client was not opened (i.e., mailto action failed or was blocked)
      if (emailClicked && !window.location.href.startsWith('mailto:')) {
        setShowEmailError(true); // Display the error message if mailto doesn't open
      }
    }, 5000);
  };

  return (
    <nav className="flex justify-between items-center px-2 py-3 bg-white shadow-md">
      <Link to={'/'}>
        <img
          src="/Header.png"
          alt="Logo"
          className="h-16 ml-36 -mt-3"
        />
      </Link>
      <ul className="flex space-x-4 mr-36 font-medium">
        <li>
          <Link
            to="/"
            className={` ${location.pathname === '/' ? 'text-blue-600 underline' : 'text-black'} hover:text-blue-600`}
          >
            SEARCH
          </Link>
        </li>
        <li>
          <Link
            to="https://girmantech.com"
            className={`hover:underline ${location.pathname === 'https://girmantech.com/' ? 'text-blue-600' : 'text-black'} hover:text-blue-600`}
          >
            WEBSITE
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/company/girmantech/"
            className={`hover:underline ${location.pathname === 'https://www.linkedin.com/company/girmantech/' ? 'text-blue-600' : 'text-black'} hover:text-blue-600`}
          >
            LINKEDIN
          </Link>
        </li>
        <li>
          {/* Replace the <a> with a button to handle the email click */}
          <button
            onClick={handleEmailClick}
            className={`hover:underline ${location.pathname === 'mailto:contact@girmantech.com' ? 'text-blue-600' : 'text-black'} hover:text-blue-600`}
          >
            CONTACT
          </button>
        </li>
      </ul>

      {/* Error Popup for Mailto Issues */}
      {showEmailError && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="font-semibold text-lg">Unable to open email client</h3>
            <p className="text-sm text-gray-500 mt-2">It seems that your browser is blocking the email client. Please allow access or use <a href="mailto:contact@girmantech.com" className="text-blue-600">Gmail</a> directly.</p>
            <button
              onClick={() => setShowEmailError(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
