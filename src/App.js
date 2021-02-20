import React, {useState} from 'react';
import InputForm from "./InputForm";
import './App.css';

function App() {

    const [inputList, setInputList] = useState([
        {
            email: 'test1',
            password: '1233'
        },
    ]);

    const [disableInput, setDisableInput] = useState(true);

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;

        setInputList(list);
        console.log(inputList.email);
        console.log(inputList.password);
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
        const list = [...inputList];
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
                            disabled={disableInput}
                            onChange={e => {handleChange(e, i)}}
                        />
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            className='mr10'
                            value={item.password}
                            onChange={e => {handleChange(e, i)}}
                        />

                        {
                            inputList.length !== 1 &&
                            <input
                                type="button"
                                value='Remove'
                                className='mr10'
                                onClick={() => {handleRemoveInput(i)}}
                            />
                        }

                        {
                            inputList.length - 1 === i
                                &&
                            <input
                                type="button"
                                value='Add'
                                onClick={handleAddInput}
                            />
                        }

                        <input
                            type="button"
                            value='Disable Enable'
                            onClick={() => { handleToggleDisable(i)}}
                        />
                    </div>
                );
            })}

            <pre>
                {JSON.stringify(inputList, null, 2)}
            </pre>
        </>
    );
}

export default App;
