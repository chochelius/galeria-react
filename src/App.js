import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="App">

      <div className="container">
      <Header title="Galería de imágenes con React" />
        <div className="row">
          
          <div className="col-md-6 ml-auto px-1 py-1">
            <Card image="https://picsum.photos/seed/lorem/200/200" title="Tarjeta 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus." buttontext="Ver Mas" />
          </div>
          <div className="col-md-6 ml-auto px-1 py-1">
            <Card image="https://picsum.photos/seed/picsum/200/200" title="Tarjeta 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus." buttontext="Ver Mas" />
          </div>
          <div className="col-md-6 ml-auto px-1 py-1">
            <Card image="https://picsum.photos/seed/dolor/200/200" title="Tarjeta 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus." buttontext="Ver Mas" />
          </div>
          <div className="col-md-6 ml-auto px-1 py-1">
            <Card image="https://picsum.photos/seed/sit/200/200" title="Tarjeta 4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus." buttontext="Ver Mas" />
          </div>
          <Footer text="Todos los derechos reservados" />
        </div>
      </div>
    </div>
  );
}

export default App;
