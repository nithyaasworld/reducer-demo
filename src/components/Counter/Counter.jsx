import counterStyles from './Counter.module.css';
import CounterContext from '../CounterContext/CounterStore';
import { useContext } from 'react';


export default function Counter() {
    let { counterState, dispatch } = useContext(CounterContext);
    return (
        <div className={counterStyles['counter-container']}>
            <h2>Counter Buttons</h2>
            <button className={counterStyles.btn}  onClick={()=> dispatch('decrement')}>-</button>
            {counterState.counterValue}
            <button className={counterStyles.btn}  onClick={()=> dispatch('increment')}>+</button>
        </div>
    )
}