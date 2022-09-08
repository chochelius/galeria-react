import './App.css';

import Tarjeta from '../src/Components/Card.jsx';
import Header from './Components/Header';
import Footer from './Components/Footer';

//se despliegan los componentes en la app

const App = () => {
  return (
    <div className="App">
      <div>
      <Header
      titulo = "Galería de Imágenes con React" 
      />
      </div>
      <div className="galeria">
      <Tarjeta 
      img = "https://picsum.photos/200"
      titulo = "Titulo de la tarjeta"
      texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
       <Tarjeta 
      img = "https://picsum.photos/200"
      titulo = "Titulo de la tarjeta"
      texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
       <Tarjeta 
      img = "https://picsum.photos/200"
      titulo = "Titulo de la tarjeta"
      texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Footer 
      titulo = "Todos los derechos reservados"
      />
    </div>
    </div>
  );
};

export default App;
