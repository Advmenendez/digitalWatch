import DigitalClock from "./components/DigitalClock/DigitalClock";
import "./App.css";
import Countdown from "./components/CountDown/CountDown";
import Stopwatch from "./components/StopWatch/StopWatch";

const App = () => {
  return (
    <>
      <div className="app">
        <DigitalClock />
        <Countdown />
        <Stopwatch/>
        
      </div>
    </>
  );
};

export default App;
