import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.label}</button>
                <style jsx>{`
                    button {
                        font-size: 2em;
                        padding: 0.5em 1em;
                        background-color: white;
                        border: 1px solid #777;
                        outline: none;
                        border-radius: 10px;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #EEE;
                    }
                `}</style>
            </div>
        );
    }
}

export default Button;