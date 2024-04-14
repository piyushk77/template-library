import React, { useState } from 'react';

function SearchForm({ categories, onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [fileFormat, setFileFormat] = useState('');
    const [dateUpdated, setDateUpdated] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare search filters
        const searchFilters = {
            query: searchQuery.trim(),
            category,
            fileFormat,
            dateUpdated,
        };
        // Pass search filters to parent component for handling search
        onSearch(searchFilters);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Templates"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {/* Map over categories to generate options */}
                        {categories.map((category) => (
                            <option key={category.id} value={category.title}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-auto">
                    <select
                        className="form-select"
                        value={fileFormat}
                        onChange={(e) => setFileFormat(e.target.value)}
                    >
                        <option value="">All Formats</option>
                        <option value="PPT">PPT</option>
                        <option value="Docs">Docs</option>
                        <option value="Sheets">Sheets</option>
                        {/* Add more file formats as needed */}
                    </select>
                </div>
                <div className="col-auto">
                    <input
                        type="date"
                        className="form-control"
                        value={dateUpdated}
                        onChange={(e) => setDateUpdated(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
