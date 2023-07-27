import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Layout.css'; // File CSS khusus untuk layout
import { Dropdown, Filter } from '../Component';
import { LeftContent, RightContent } from './Layout/SideLayout';

import { Resizable } from 'react-resizable';

const Layout = () => {
    const Dashboard = ['View System Dashboard', 'Manage Dashboard'];
    const BusinessUnit = ['SME TBO Convenant Document (TBO)', , 'PTBC (SME)'];
    const Application = ['SME-53089 PT JADI BERKAT MULYA', 'SME-17000 PT PELAYARAN BERKAT ABADI JAYA MAKMUR', 'SME PT Berkat Unggul Pratama', 'SME-40929 Berkat Anugerah Jaya Raya, PT']
    const Export = ['Printable', 'Full Content', 'XML', 'RSS (Issues)', 'RSS (Comments)', 'Word', 'Excel (All fields)', 'Current fields']
    const Tools = ['all 301 issue(s)', 'current page']
    const Type = ['All Standard Application Types', 'All Sub-Task Application Types']
    const Status = ['IN PROGRESS', 'NEW', 'ASSIGNED TO RM', 'WAITING DUW ASSESSMENT']
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    
    
    return (
        <div className="layout">
            {/* Navbar */}
            <nav className="navbar header navbar-expand-lg navbar-light">
                {/* Bagian kiri */}
                <div className="navbar-nav mr-auto col-lg-6">
                    <a className="nav-item nav-link active col-lg-1" href="#"><b>WCT</b></a>
                </div>
                <div className='col-lg-3'></div>
                {/* Bagian kanan */}
                <div className="navbar-nav ml-auto col-lg-3">
                    <div className='nav-item nav-link'>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <a className="nav-item nav-link" href="#">Help</a>
                    <a className="nav-item nav-link" href="#">Profile</a>
                </div>
            </nav>
            <div>
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="d-flex">
                            <div className="p-2 col-lg-4 sc-content ">
                                <LeftContent data={Application} onItemClick={handleItemClick} className="left-text" />
                            </div>
                            <div className="p-2 col-lg-8 sc-content">
                                <RightContent selectedItem={selectedItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
