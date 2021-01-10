import React from 'react';

const Scroll1 = ( props) => {
    return (
        <div style={{ overflow: 'scroll', border: '1px solid gray', height: '250px' }} >
           { props.children }
        </div>
    );
};

export default Scroll1;