import {BrowserRouter as  Router, Routes, Route, Link} from "react-router-dom"
import { Company } from "./componentes/pages/Company";
import { Contato } from "./componentes/pages/Contato";
import { Home } from "./componentes/pages/Home";
import { NewProject} from "./componentes/pages/NewProject";
import { Projects } from "./componentes/pages/Projects";

import {Container} from "./Layouts/Container"
import {NavBar} from "./componentes/NavBar"
import {Footer} from "./componentes/Footer"
function App() {
  return (
    <Router>
      <NavBar/>
     <Container customClass='min-height'>     
      <Routes>   
                  
         <Route path="/" element={<Home/>}></Route>
         <Route path="/Contato" element={<Contato/>}></Route>      
         <Route path="/Company" element={<Company/>}></Route>
         <Route path="/NewProject" element={<NewProject/>}></Route>    
         <Route path="/Projects" element={<Projects/>}></Route>      
      </Routes>
      
      </Container> 
    <Footer/>
    </Router>
   
  );
}

export default App;
