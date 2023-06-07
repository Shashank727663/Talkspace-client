import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage';
function App() {
  return (
    <div className="App">
    //exact is used to match the exact path for preventing the rendering of the other components
    <Route path= "/" component ={HomePage} exact/>
    <Route path= "/chats" component={ChatPage} />
    </div>
  );
}

export default App;
