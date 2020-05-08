import React from 'react';

// Function Declaration
function sayHallo() {
    return "HALLO"
}

// Function Expression
const sayHelloAgain = function () {
    return "HALLO AGAIN"
}

const Javascript = () => {
    return (
        <div>
            {sayHallo()} <br/>
            {sayHelloAgain()}
        </div>
    );
};

export default Javascript;
