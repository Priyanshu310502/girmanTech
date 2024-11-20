import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NavResult({ onSearch }) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
        navigate('/results');
        console.log("data", query);
    };

    return (
        <nav className="bg-white text-black mb-10 shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
                <Link to="/" className="font-bold text-lg mb-4 md:mb-0">
                    <img
                        src="/Header.png"
                        alt="Logo"
                        className="h-16 md:ml-28 sm:ml-10 -mt-3"
                    />
                </Link>
                <form onSubmit={handleSearch} className="flex justify-center w-full md:mr-28 md:w-auto">
                    <div className="flex items-center border rounded-md px-4 py-2 w-full bg-white">
                        <img src="/Wrapper.png" alt="Search Icon" className="h-6 w-6 mr-2" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search"
                            className="flex-grow outline-none rounded-md"
                        />
                    </div>
                </form>
            </div>
        </nav>
    );
}

NavResult.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default NavResult;