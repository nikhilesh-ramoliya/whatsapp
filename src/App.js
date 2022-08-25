import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app_body">
      
        {/*! side bar */}
        <Sidebar/>
        {/*! chat */}
        <Chat/>
      </div>
    </div>
  );
}

export default App;
