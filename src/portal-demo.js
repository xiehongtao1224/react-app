import React from 'react';
import ReactDOM from 'react-dom';

class PortalDemo extends React.Component{
    render() {
        return ReactDOM.createPortal(
            <div>PortalDemo</div>,
            document.getElementById('createPortal')
        )
    }
}

export default PortalDemo;
