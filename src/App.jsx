import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import {Outlet} from "react-router-dom" 
import ThemeControler from "./Components/ThemeControler";

function App() {

  return (
    <ThemeControler>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </ThemeControler>
  )
}

export default App
