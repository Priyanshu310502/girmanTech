import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import SearchResults from './page/SearchResults';
import EmptyState from './components/EmptyState';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onSearch={setQuery} />} />
        <Route path="/results" element={<SearchResults query={query} setQuery={setQuery} />} />
        <Route path="/notfound" element={<EmptyState />} />

      </Routes>
    </Router>
  );
};

export default App;

