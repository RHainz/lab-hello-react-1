// src/App.js

import './style.css';
import {Header} from "./components/Header/index.js"
import {Body} from "./components/Body"

function App() {
  return (
    <div className="App">
      
      <Header />
      <Body />
      <div>Body</div>
      <div>Foot</div>
    </div>
  );
}

export default App;