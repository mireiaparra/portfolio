import '../styles/App.scss';
import Cover from './Cover';
import {Route, Routes} from 'react-router-dom';
import { Header } from './Header';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />
       
      <Routes>
      <Route
          path='/' element={
            <Cover/>
          }/>
        <Route
          path='/sobre-mi' element={
            <h1>Prueba</h1>
          }/>
          <Route
          path='/proyectos' element={
            <h1>Prueba proyectos</h1>
          }/>
            <Route
          path='/contacto' element={
            <h1>Prueba contacto</h1>
          }/>
      </Routes>
     
  

    </div>
  );
}

export default App;
