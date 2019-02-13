import React from 'react';


function Button(props) {

    return <div className="button">
        <button onClick={props.click}>
            Начать сначала
        </button>
    </div>;
}


export default Button;
