import './App.css';
import Card from "./card/Card";
import {list} from "./data";

function App() {
    return (
        <div className="App">
            {
                !!list?.length && list?.map((item, index) => {
                   return <Card {...item} key={index}/>
                })
            }
        </div>
    );
}

export default App;
