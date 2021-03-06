import React, {} from 'react';

const validationComponent = (props) => {
    let message = "";

    if(props.textLength === 0){
        message = "";
    }else if (props.textLength >= 5){
        message = "Text long enough";
    }else{
        message = "Text too short";
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default validationComponent;