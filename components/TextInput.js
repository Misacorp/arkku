import React from 'react';

const TextInput = (props) => (
    <div>
        <label for={props.name}>{props.name}</label>
        <input type="text" name={props.name} placeholder={props.placeholder}></input>
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
)

export default TextInput;

// export default ({ todo, remove }) => {
//     return (
//         <li style={{ listStyle: 'none' }}>
//             <button
//                 className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
//                 onClick={_ => remove(todo)}
//                 style={{ fontSize: 12 }}
//             >
//                 x
//             </button> {' '} {todo.text}
//         </li>
//     );
// };
