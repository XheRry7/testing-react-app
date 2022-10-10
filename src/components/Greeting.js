import {useState} from 'react';
import Output from './Output';

const Greeting = ()=>{

    const [state , setState] = useState(false);

const changeHandler=()=>{

    setState(true);

}


    return<div>
        <h1>Hello world!</h1>
        {!state && <Output>It's good to see you!</Output>}
        {state && <Output>Changed!</Output>}
        <button onClick={changeHandler} >Change Text!</button>
    </div>

}

export default Greeting;