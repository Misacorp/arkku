import React from 'react';

import TextInput from './TextInput';

class ItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: 'a',
            itemCondition: 'b'
        };
    }

    render() {
        return (
            <div>
                <h3>Item {this.props.id}</h3>
                <TextInput ref="itemName" name="Name" placeholder="Item name"/>
                <TextInput ref="itemCondition" name="Condition" placeholder="Item condition"/>
                <style jsx>{`
                    h3 {
                        margin: 0;
                        padding-bottom: 1rem;
                    }
                    div {
                        display: inline-block;
                        padding: 1em;
                        margin: 1em;
                        text-align: center;
                        background-color: white;
                        border: 1px solid #AAA;
                    }
                `}</style>
            </div>
        );
    }

    getName() {
        return this.refs.itemName.getValue();
    }

    getCondition() {
        return this.refs.itemCondition.getValue();
    }
}

export default ItemInput;