import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label for={this.props.name}>{this.props.name}</label>
                <input ref="input" type="text" name={this.props.name} placeholder={this.props.placeholder}></input>
                <style jsx>{`
                    div {
                        clear: both;
                        padding: 0.2em;
                    }
                    label {
                        float: left;
                        margin-right: 3em;
                    }

                    input {
                        float: right;
                        padding: 0.2em;
                        border: none;
                        border-bottom: 1px solid #AAA;
                    }
                    input:focus {
                        outline: none;
                        border-color: #333;
                    }
                `}</style>
            </div>
        );
    }

    getValue() {
        return this.refs.input.value;
    }
}

export default TextInput;