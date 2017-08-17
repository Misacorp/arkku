import React from 'react';

import ItemInput from './ItemInput';
import Button from './Button';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
    }

    greetUser(context) {
        let name = this.refs.item_1.getName();
        let condition = this.refs.item_1.getCondition();
        console.log(name + " / " + condition);
    }

    render() {
        return(    
            <div>
                <h2>Item Input Form</h2>
                <ItemInput ref="item_1" id="1"/>
                <ItemInput id="2"/>
                <Button label="Submit" onClick={this.greetUser.bind(this)}/>
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
        );
    }
}

export default ItemForm;