import React from 'react'
import { NavLink } from 'react-router-dom'

const Topbar = () => {
  return (
    <div>
       <div className="text-center">
               <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid justify-content-center">
    
   
      <div className="navbar-nav" >
      <a class="navbar-brand" href="#" id="brand"></a>
           <NavLink style={({isActive})=>{
                return {color: isActive ? 'orange':'white'}
           }}   to="/home" className="nav-link active">خانه</NavLink>
            <NavLink style={({isActive})=>{
                 return {color: isActive ? "orange": "white"}
            }}   to="/about" className="nav-link">معرفی</NavLink>

     <>
       <NavLink  style={({isActive})=>{
          return{color:isActive ? "orange":"white"}}}  to="/support" className="nav-link">پشتیبانی</NavLink>
          <NavLink style={({isActive})=>{
          return{color:isActive ? "orange":"white"}}} to="/feature" className="nav-link">ویژگی</NavLink>
     </>


     <>
       <NavLink  style={({isActive})=>{
          return{color:isActive ? "orange":"white"}}}  to="/service" className="nav-link">سرویس ها</NavLink>
          <NavLink style={({isActive})=>{
          return{color:isActive ? "orange":"white"}}} to="/login" className="nav-link">ورود/ثبت نام
                    <i class='fas fa-key'></i></NavLink>

     </>




          
       
      </div>
    </div>
 
</nav>

          </div>
    </div>
  )
}

export default Topbar