import React, { useState } from 'react';
import './Filter.css'
const Filter = ({ data, name }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [nama, setNama] = useState(name);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const keyword = event.target.value.toLowerCase();
        setSearchTerm(keyword);
        const filteredResults = data.filter((item) =>
            item.toLowerCase().includes(keyword)
        );
        setFilteredData(filteredResults);
    };

    return (
        <div className="container">
            <div className="row">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {name}
                    </a>
                    <div className="offset-md-3 dropdown-menu">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <ul className="list-group mt-3">
                            {filteredData.map((item, index) => (
                                <li className="list-group-item dropdown-item" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            </div>
        </div>
    );
};

export default Filter;
