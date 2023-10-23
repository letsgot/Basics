import logo from './logo.svg';
import './App.css';
import Ballcontainer from './Ballcontainer';
import store from './redux/store';
import { Provider } from 'react-redux';
import BatContainer from './BatContainer';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Ballcontainer />
        <BatContainer></BatContainer>
      </div>
    </Provider>
  );
}

export default App;
