import React, {Component} from 'react';


class InputForm extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <>
                <div>
                    <input type='text' name='hello' placeholder='Enter Email' />
                    <input type='text' name='hello' placeholder='Enter Password'/>
                    <button>Remove</button>
                    <button> Make Editable</button>
                </div>
            </>
        );
    }
}
export default InputForm;