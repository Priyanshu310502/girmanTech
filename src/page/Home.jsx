import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';

const Home = ({ onSearch }) => {
  return (
    <div className="bg-[linear-gradient(180deg,#FFFFFF_31%,#B1CBFF_100%)] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center md:-top-10">
        {/* <h1 className="text-3xl font-bold mb-4">Welcome to Girman Technologies</h1> */}
        <div className="w-full max-w-md -mt-16 md:-mt-56">
          <img src='/Frame.png' alt='logo' className="w-full" />
          <SearchBox onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Home;