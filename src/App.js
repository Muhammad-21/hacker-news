import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import store from './store/store';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar/>
      <MainPage/>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
