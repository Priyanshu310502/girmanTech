// // import Card from './components/Card';
// // import users from './assets/users.json'; // Import JSON file
// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import SearchResults from './components/SearchResut';
// const App = () => {
//   const [query, setQuery] = useState('');

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home onSearch={setQuery} />} />
//           <Route path="/results" element={<SearchResults query={query} />} />
//         </Routes>
//       </Router>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* {users.map((user, index) => (
//           <Card key={index} user={user} />
//         ))} */}
//       </div>
//     </div>
//   );
// };




// export default App;



import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import SearchResults from './page/SearchResults';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onSearch={setQuery} />} />
        <Route path="/results" element={<SearchResults query={query} setQuery={setQuery} />} />

      </Routes>
    </Router>
  );
};

export default App;

