import React, { useState } from 'react';

function SearchForm({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare search filters
        const searchFilters = {
            query: searchQuery.trim(),
        };
        // Pass search filters to parent component for handling search
        onSearch(searchFilters);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="col-6 homeMidBar">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Templates"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
