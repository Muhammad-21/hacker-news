import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Layout.Content>
        <News />
      </Layout.Content>
    </BrowserRouter>
  );
}

export default App;
