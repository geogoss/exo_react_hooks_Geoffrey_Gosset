import {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Enfants from "./Enfants";
import Personnages from "./Pesonnages"

function App() {

const [perso, setPerso] = useState(

  {prenom: "Geoffrey",
  nom: "Gosset",
  age: 28,
  commune: "Uccle" }

  )
  
  
  const rename = ()=> {
    setPerso(
      {prenom: "Jason",
      nom: "Statan",
      age: 35,
      commune: "New York" }

  )
}

const [enfants, setEnfants] = useState([
  {nom: "Luis", age: 16},
  {nom: "Noah", age: 13},
  {nom: "Léo", age: 11},
  {nom: "Emma", age: 8},
  {nom: "Sacha", age: 4}
]
  
)



  return (
    <div className="App">
      <div>
      <Personnages geoffrey={perso}  passer={rename} />

      </div>
      <div className="map w-25 mx-auto mt-5">
        {enfants.map((el,i) => {

          return <Enfants key={i} enfants={el} />

        })}

      </div>
    </div>
  );
}

export default App;
