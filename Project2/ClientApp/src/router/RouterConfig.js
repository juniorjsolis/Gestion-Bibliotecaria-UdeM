import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Book, Books, Home, Login, Register, SearchResult } from "../pages";

export const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Semi Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search/:name" element={<SearchResult />} />
        <Route path="/book/:name" element={<Book />} />

        {/* Private Routes */}

        {/* Admin Routes */}
        <Route path="/admin/books" element={<Books />} />
      </Routes>
    </Router>
  );
};
