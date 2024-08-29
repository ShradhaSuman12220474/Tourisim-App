import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (input) {
            navigate(`/${input.toLowerCase()}`); // Correctly use backticks for the template literal
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter state name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-gray-300 p-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
                Search
            </button>
        </div>
    );
}

export default Search;
