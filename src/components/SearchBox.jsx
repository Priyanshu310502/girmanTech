import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    // setQuery('');
    navigate('/results');
    console.log("data", query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mt-8">
      <div className="flex items-center border rounded-md p-2 w-full bg-white ">
        <img src="/Wrapper.png" alt="Search Icon" className="h-6 w-6 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="flex-grow outline-none "
        />
      </div>
    </form>

  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;




