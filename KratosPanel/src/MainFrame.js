import React from 'react';

const MainFrame = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
};

export default MainFrame;