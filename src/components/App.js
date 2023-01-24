import '../styles/App.scss';
import Cover from './home/Cover';
import {Route, Routes} from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './home/Footer';
import { Projects } from './projects/Projects';
import { About } from './about/About';
import { Background } from './home/Background';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />
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
