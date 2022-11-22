import Emi from "./component/Emi";
import "./App.css";
import Application from "./component/Application";
import Display from "./component/Display";
import Previous from "./component/Previous";

function App() {
  return (
    <div className="book">
      <h1 className="Word">EQUATED MONTHLY INSTALLMENT CALCULATOR</h1>
      <div className="move">
        <Application />
        <div className="down">
          <Emi />
        </div>
        <Display />
      </div>
      <Previous />
    </div>
  );
}

export default App;

