import { useState } from "react";

export default function SearchFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="flex items-center gap-4 mb-8">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSearch} className="btn-primary">
        Search
      </button>
      <select value={filter} onChange={handleFilter} className="select-field">
        <option value="">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="AI">AI</option>
        <option value="Blockchain">Blockchain</option>
      </select>
    </div>
  );
}
