import React from "react";
import './Dropdown.css'
const Dropdown = (props) => {
    const { name, item } = props;
    return (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {name}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {item.map((item, index) => (
                    <li><a class="dropdown-item" href="#">{item}</a></li>
                ))}
            </ul>
        </li>
    );
}
export default Dropdown;