import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick, onChange}) => {
    if(active) {
        return <span>{children}</span>
    }

    return(
        <span
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </span>
    )
}
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Link;
