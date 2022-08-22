
import './App.css';
import "./style4.css";
import "./reg1.css";
import "./Branch.css";

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';
 import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Sidebar from "./layout/Sidebar"
import Home from './Home';
import Topbar from './layout/Topbar';
import About from './pages/About';
import Support from './pages/Support';
import Feature from './pages/Feature';
import Login from './pages/Login';
import Services from './pages/Services';
import Psidebar from './layout/Psidebar';
import Register from './pages/Register';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Cards from './pages/Cards';
import MainSide from './layout/MainSide';
import Branchh from './pages/BranchRoutes/Branchh';
import MainNav from './pages/BranchRoutes/MainNav/MainNav';
import Edit from './pages/BranchRoutes/Edit';
import Loc from './pages/BranchRoutes/Loc';
import Personrel from './pages/BranchRoutes/personel foleder/Personrel';
import Present from './pages/BranchRoutes/Present';
import Task from './pages/BranchRoutes/Task';
import View from './pages/BranchRoutes/View';
import Active from './pages/BranchRoutes/Active';
import Company from './pages/BranchRoutes/Company';
import Shift from './pages/BranchRoutes/personel foleder/Shift';
import Register3 from './pages/Register3';
import BlogDetails from './pages/BranchRoutes/personel foleder/BlogDetails';
import Pishkhan from './pages/Pishkhan';
import HomeSide from './pages/HomeSide';
import Tarh from './pages/Tarh';


function App() {




  return (
  <>
<Router>

  <Topbar></Topbar>

 

  <Routes>
    <Route path='/home' index element={<Home/>}/>
    <Route path='/homeSide' element={<HomeSide/>}/>
    <Route path='/tarh' element={<Tarh/>}/>
    <Route path='/about'  element={<About/>}/>
    <Route path='/support'  element={<Support/>}/>
    <Route path='/feature'  element={<Feature/>}/>
    <Route path='/services'  element={<Services/>}/>
    <Route path='/pishkhan' element={<Pishkhan/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/sidebar' element={<Sidebar/>}/>
     <Route path='/Psidebar' element={<Psidebar/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/register1' element={<Register1/>}/>
     <Route path='/register2' element={<Register2/>}/>
     <Route path='/register3' element={<Register3/>}/>
     <Route path="/cards" element={<Cards/>}/>
     <Route path='/MainSide' element={<MainSide/>}/>
     <Route path='/branch' element={<Branchh/>}/>
     <Route path='/m' element={<MainNav></MainNav>}></Route>
        <Route path='/task' element={<Task />} />
        <Route path='/loc' element={<Loc />} />
        <Route path='/present' element={<Present />} />
        <Route path='/personel' element={<Personrel />} />
        <Route path='/company' element={<Company/>}></Route>
        <Route path='/shift' element={<Shift></Shift>}></Route>
        <Route path='detail/:id' element={<BlogDetails/>}/>

  </Routes>
</Router>
 
 </>

  );
}

export default App;
