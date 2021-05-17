import navbarStyles from './Navbar.module.css';
import CounterContext from '../CounterContext/CounterStore';
import { useContext } from 'react';
export default function Navbar() {
    let { counterState, dispatch } = useContext(CounterContext);
    return (
        <div className={navbarStyles['navbar-container']}>
            <h2>Navbar</h2>
            <div className={navbarStyles['navbar-right-section']}>
                <div className={navbarStyles['counter-value']}>Counter Value: {counterState.counterValue}  </div>
                <button className={navbarStyles['reset-btn']} onClick={() => dispatch('reset')}>Reset Counter</button>
            </div>
            
        </div>
    )
}