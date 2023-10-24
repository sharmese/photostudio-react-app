import Navbar from './components/layout/Navbar';
import Main from './components/pages/main/Main';
import Assortment from './components/pages/assortment/Assortment';
import About from './components/pages/about/About';
import Reviews from './components/pages/reviews/Reviews';
import QuestionAnswer from './components/pages/question-answer/QuestionAnswer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Assortment />
      <About />
      <Reviews />
      <QuestionAnswer />
    </Fragment>
  );
}

export default App;
