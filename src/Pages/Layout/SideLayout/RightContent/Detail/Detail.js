import React,{useState} from "react";
import './Detail.css'
import { Table } from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ClientInformation from "./ClientInformation";
const Detail = () => {
    const [activeTab, setActiveTab] = useState('tab1');
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
    return (
        <div className="detail">
            <div className="info">
                <Table bordered={false}>
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>:</td>
                            <td>Renewal Application</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>:</td>
                            <td>Canccelled</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>:</td>
                            <td>Canccelled</td>
                        </tr>
                        <tr>
                            <td>Security Level</td>
                            <td>:</td>
                            <td>Private</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="tabs-detail">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab1' ? 'active' :''}
                  onClick={() => toggleTab('tab1')}
                >
                  Client Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab2' ? 'active' : ''}
                  onClick={() => toggleTab('tab2')}
                >
                    Document Checklist
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab3' ? 'active' : ''}
                  onClick={() => toggleTab('tab3')}
                >
                  Pre Screen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab4' ? 'active' : ''}
                  onClick={() => toggleTab('tab4')}
                >
                  Appraisal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab5' ? 'active' : ''}
                  onClick={() => toggleTab('tab5')}
                >
                  RM
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab6' ? 'active' : ''}
                  onClick={() => toggleTab('tab6')}
                >
                  DUW
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab7' ? 'active' : ''}
                  onClick={() => toggleTab('tab7')}
                >
                  CA
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab8' ? 'active' : ''}
                  onClick={() => toggleTab('tab8')}
                >
                  DA
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'tab9' ? 'active' : ''}
                  onClick={() => toggleTab('tab9')}
                >
                  SUL Completion
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="tab1">

              <ClientInformation/>
              
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
              <TabPane tabId="tab7">
                <h4>Content for Tab 7</h4>
                <p>This is the content of tab 7.</p>
              </TabPane>
              <TabPane tabId="tab8">
                <h4>Content for Tab 8</h4>
                <p>This is the content of tab 8.</p>
              </TabPane>
              <TabPane tabId="tab9">
                <h4>Content for Tab 9</h4>
                <p>This is the content of tab 9.</p>
              </TabPane>
            </TabContent>
          </div>
        </div>
    )
}
export default Detail;