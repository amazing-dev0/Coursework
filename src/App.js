
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import History from './History';
import Info from './Info';
import Goals from './Goals';
import Layout from './Layout';
import Weather from'./Weather';
import Main from './Main';
import Data from './Data';
function App() {
    return(
    <div className="balls">
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="Main" element={<Main />} />
            <Route path="History" element={<History/>} />
            <Route path="Info" element={<Info/>} />
            <Route path="Goals" element={<Goals/>} />
            <Route path="Data" element={<Data/>} />
            <Route path="Weather" element={<Weather/>} />
        </Route>
    </Routes>
</BrowserRouter>
</div>


);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
