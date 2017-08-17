import React from 'react';

const Button= (props) => (
    <div>
        <button>{props.label}</button>
        <style jsx>{`
            button {
                font-size: 2em;
                padding: 0.5em 1em;
                background-color: white;
                border: 1px solid #777;
                outline: none;
                border-radius: 10px;
            }
        `}</style>
    </div>
)

export default Button;