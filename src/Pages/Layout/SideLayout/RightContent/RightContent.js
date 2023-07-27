import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Detail from "./Detail/Detail";
const RightContent = ({ selectedItem }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const [width, setWidth] = useState(300); // Nilai awal lebar komponen

  const handleMouseMove = (event) => {
    // Ubah nilai lebar komponen berdasarkan posisi kursor mouse
    const newWidth = event.nativeEvent.clientX;
    setWidth(newWidth);
  };
  return (
    <div className="data-detail">
      {!selectedItem && <div>Select an item</div>}
      {selectedItem &&
        <div>
          <h1>{selectedItem}</h1>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab1' ? 'active' : ''}
                  onClick={() => toggleTab('tab1')}
                >
                  Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab2' ? 'active' : ''}
                  onClick={() => toggleTab('tab2')}
                >
                  Attachment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab3' ? 'active' : ''}
                  onClick={() => toggleTab('tab3')}
                >
                  Issue Links
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab4' ? 'active' : ''}
                  onClick={() => toggleTab('tab4')}
                >
                  Sub-Tasks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab5' ? 'active' : ''}
                  onClick={() => toggleTab('tab5')}
                >
                  Activity
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab6' ? 'active' : ''}
                  onClick={() => toggleTab('tab6')}
                >
                  People
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="tab1">
                <Detail/>
              </TabPane>
              <TabPane tabId="tab2">
                <h4>Content for Tab 2</h4>
                <p>This is the content of tab 2.</p>
              </TabPane>
              <TabPane tabId="tab3">
                <h4>Content for Tab 3</h4>
                <p>This is the content of tab 3.</p>
              </TabPane>
              <TabPane tabId="tab4">
                <h4>Content for Tab 4</h4>
                <p>This is the content of tab 4.</p>
              </TabPane>
              <TabPane tabId="tab5">
                <h4>Content for Tab 5</h4>
                <p>This is the content of tab 5.</p>
              </TabPane>
              <TabPane tabId="tab6">
                <h4>Content for Tab 6</h4>
                <p>This is the content of tab 6.</p>
              </TabPane>
            </TabContent>
          </div>
        </div>
      }
    </div>
  )
}
export default RightContent;