import Counter from "../Counter/Counter";
import { CounterContextProvider } from "../CounterContext/CounterStore";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import mainStyles from './Main.module.css';

export default function Main(props) {
    return (
        <CounterContextProvider>
        <div className={mainStyles['main-container']}>
            <Navbar />
            <div className={mainStyles['body-container']}>
                <Sidebar />
                <Content counter={<Counter />} />
            </div>
            </div>
        </CounterContextProvider>
    )
}