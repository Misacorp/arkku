import React from 'react';

import TextInput from './TextInput';

const ItemInput = (props) => (
    <div>
        <h3>Item {props.id}</h3>
        <TextInput name="Name" placeholder="Item name"/>
        <TextInput name="Condition" placeholder="Item condition"/>
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
)

export default ItemInput;