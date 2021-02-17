import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../actions/templateActions';
import {DivSC} from './Styles';

const Hooks = () => {
    //getting global state
    const count = useSelector(state => state.counter);
    //recieve dispatch functoin
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hooks</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Click Me</button>
        </div>
        
        <DivSC>
            lalalala
        </DivSC>
    )
}

export default Hooks
