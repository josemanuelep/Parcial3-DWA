import React from 'react';
// or less ideally
import { Nav } from 'react-bootstrap';
const MainAddButton = (props) => (
    <div>
        <Nav
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            {
                props.navigation.map(nav => {
                    return (
                        <Nav.Item>
                            <Nav.Link href="/home">{nav}</Nav.Link>
                        </Nav.Item>
                    );

                })
            }
        </Nav>
    </div>
);
export default MainAddButton;