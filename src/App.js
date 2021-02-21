import React, {useState} from 'react';
import InputForm from "./InputForm";
import './App.css';

function App() {

    const [inputList, setInputList] = useState([
        {
            email: '',
            password: '',
        },
    ]);


    const [disableInput, setDisableInput] = useState([]);

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;

        setInputList(list);
    }


    const handleAddInput = () => {
        setInputList([...inputList, {
            email: '',
            pass: '',
        }])
    }

    const handleRemoveInput = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }


    const handleToggleDisable = (index) => {

        if(disableInput.includes(index))
        {
            setDisableInput(disableInput.filter(item => item !== index));
            // console.log(disableInput.includes(index));
        }

        else if(!disableInput.includes(index))
        {
            setDisableInput(disableInput.concat(index));
            // console.log(disableInput.includes(index));
        }


    }


    return (
        <>
            {inputList.map((item,i) => {
                return (
                    <div key={i} className='box'>
                        <input
                            type="text"
                            name='email'
                            placeholder='Enter email'
                            className='mr10'
                            value={item.email}
                            disabled={disableInput.includes(i)}
                            onChange={e => {handleChange(e, i)}}
                        />
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            className='mr10'
                            value={item.password}
                            disabled={disableInput.includes(i)}
                            onChange={e => {handleChange(e, i)}}
                        />

                        <input
                            type="button"
                            value='Remove'
                            className='mr10'
                            onClick={() => {handleRemoveInput(i)}}
                        />

                        <input
                            type="button"
                            value={(disableInput.includes(i)) ? 'Enable' : 'Disable'}
                            onClick={() => { handleToggleDisable(i)}}
                        />
                    </div>

                );
            })}

            <input
                type="button"
                value='Create New'
                onClick={handleAddInput}
            />

            {/*<pre>*/}
            {/*    {JSON.stringify(inputList, null, 2)}*/}
            {/*</pre>*/}
        </>
    );
}

export default App;
