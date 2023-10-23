import './App.css';
import Navbar from './components/layout/Navbar';
import Main from './components/pages/main/Main';
import Assortment from './components/pages/assortment/Assortment';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Assortment />
    </Fragment>
  );
}

export default App;
