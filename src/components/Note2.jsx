import React from "react";

function Note2() {
    
    var cardStyle = {
        width: "18rem",
        boxShadow:"10 px 5px 15px purple"
    }

    return (
        <div className="card mt-3" style={cardStyle}>
            <h1>Second Note</h1>
            <hr />
            <div className="card-body"></div>
            <p className="lead text-center">Example Note</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor sit amet consecteture adipisicing elit. Nemo, doloribus?</p>
        </div>
    )
}
export default Note2;