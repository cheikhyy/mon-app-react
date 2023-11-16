// import logo from './logo.svg';
// import './App.css';
// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/Name.js
// src/App.js
import React from "react";
import './App.css'
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";

const firstName = "VotrePrénom"; // Remplacez par votre prénom

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Image imageUrl={product.imageUrl} altText={product.name} />
        
        <Card.Body>
          <Name name={product.name} />
          <img className="sombre" src="https://img.freepik.com/photos-premium/cuisiniere-comprend-bruleurs-four-pour-cuisiner-divers-plats_933496-32636.jpg" alt="Votre prénom" />
          <Price price={product.price} />
          <Description description={product.description} />
          <p className="col">Cuisinière à Gaz De Cuisine</p>
        </Card.Body>
      </Card>
      <p className="col">Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img className="montre" src="https://dalmiocuore.it/image/uploads/bonjour_5.jpg " alt="Votre prénom" />}
    </div>
  );
};

export default App;

