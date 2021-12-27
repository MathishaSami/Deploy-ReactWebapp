import Candidates from "./Candidates";
import NavBar from "./NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <div className="col-md- offset-md"></div>
    
      <div>
        <h1 align="center">Vaccination Informations</h1>
        <Candidates/>
      </div>
    </div>
  );
}

export default App;
