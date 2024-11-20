// import SearchBox from "./SearchBox";

// const NavResult = () => {

//     return (
//         <nav className="flex justify-between items-center p-4 bg-white ">
//             <img
//                 src="/Header.png"
//                 alt="Logo"
//                 className="h-16"
//             />
//             <div className="flex-grow ml-4">
//                 <SearchBox className="w-1/3 max-w-xl" />
//             </div>
//         </nav>
//     );
// };

// export default NavResult;













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
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="font-bold text-lg">
                    <img
                        src="/Header.png"
                        alt="Logo"
                        className="h-16 ml-28 -mt-3"
                    />
                </Link>
                <form onSubmit={handleSearch} className="flex justify-center mt-4 mr-28">
                    <div className="flex items-center border rounded-md px-10  py-2 mb-5 w-full bg-white ">
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
