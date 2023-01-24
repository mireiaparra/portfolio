import '../styles/App.scss';
import Cover from './home/Cover';
import {Route, Routes} from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './home/Footer';
import { Projects } from './projects/Projects';
import { About } from './about/About';
import { Background } from './home/Background';
import {useState} from 'react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick() {
       setIsNavOpen(!isNavOpen);
   }

  return (
    <div className="App">
      <Header handleClick={handleClick} isNavOpen={isNavOpen}/>
      <Background/>
       
      <Routes>
      <Route
          path='/' element={
            <Cover/>
          }/>
        <Route
          path='/sobre-mi' element={
            <About/>
          }/>
          <Route
          path='/proyectos' element={
            <Projects />
          }/>
      </Routes>
      <Footer />
  

    </div>
  );
}

export default App;
