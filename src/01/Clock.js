// 자바스크립트 ft.
import ClockTime from "./ClockTime";
import ClockImage from "./ClockImage";
import MyComN from "../03/MyComN";
const Clock = () => {

    return (
        <div className="App">
            <header className="App-header">
                <ClockImage />
                <ClockTime />
                <MyComN num={100} />
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
               
                {/* <div>현재시간 : {new Date().toLocaleTimeString()}</div> */}
            </header>
        </div>
    );
}

export default Clock;