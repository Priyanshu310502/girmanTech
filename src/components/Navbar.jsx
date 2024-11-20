import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [showEmailError, setShowEmailError] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  const handleEmailClick = () => {
    setEmailClicked(true);
    const subject = "Request for Software Engineer Intern at Girmantech";
    const body = "Dear Hiring Manager,\n\nI would like to apply for the Software Engineer Intern position at Girmantech. Please find my details below.....\n\n";
    const mailtoLink = `mailto:contact@girmantech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      if (emailClicked && !window.location.href.startsWith('mailto:')) {
        setShowEmailError(true);
      }
    }, 5000);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-2 py-3 bg-white shadow-md">
      <Link to={'/'}>
        <img
          src="/Header.png"
          alt="Logo"
          className="h-16 md:ml-36 md:-mt-3 mx-auto md:mx-0" // Centered on mobile
        />
      </Link>
      <ul className="flex flex-col md:mr-36 md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 font-medium">
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
            <p className="text-xs text-gray-400 mt-2">This may take a moment depending on whether your browser allows access to the email client.</p>
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