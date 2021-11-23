import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import store from './store/store';
import AppRouter from './components/AppRouter';
// import MainPage from '../src/components/MainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar/>
      <AppRouter/>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
