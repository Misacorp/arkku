import React from 'react';

import ItemInput from './ItemInput';
import Button from './Button';

const ItemForm = (props) => (
    <div>
        <h2>Item Input Form</h2>
        <ItemInput id="1"/>
        <ItemInput id="2"/>
        <Button label="Submit" />
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
                border: 1px solid #777;
            }
        `}</style>
    </div>
)

export default ItemForm;
