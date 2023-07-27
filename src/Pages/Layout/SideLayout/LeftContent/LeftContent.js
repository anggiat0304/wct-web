import React, { useState } from "react";
import './Scrollbar.css'

const LeftContent = ({ data, onItemClick }) => {
    return (
        <div className="custom-scrollbare">
            <h2>Application</h2>
            <ul className="list-group mt-3">
                {data.map((item, index) => (
                    <div
                        className="list-item"
                        key={index}
                        onClick={() => onItemClick(item)}
                    >
                            <li className="list-group-item dropdown-item" key={index}>{item}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default LeftContent;