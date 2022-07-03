import './App.css';

import JsonView from "./components/jsonView";
import NavBar from "./components/navbar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <JsonView/>
        </div>
    );
}

export default App;
