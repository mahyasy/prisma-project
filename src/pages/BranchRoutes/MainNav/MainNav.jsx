import React from 'react';
import { Link ,NavLink} from "react-router-dom";





const MainNav = () => {
  return (
    <div >



    <div className='Menu-Container' >
      <div className='row' >

       
          <NavLink to="/company" style={{textDecoration: 'none'}} className="col" id='btns'> شرکت اصلی</NavLink>
          <Link to="/task" style={{textDecoration: 'none'}} className="col" id='btns'> سمت</Link>
          <Link to="/loc" style={{textDecoration: 'none'}} className="col" id='btns'> محدوده</Link>
          <Link to="/present" style={{textDecoration: 'none'}} className='col' id='btns'>روش های حضور</Link>
          <Link to="/personel" style={{textDecoration: 'none'}} className='col' id='btns'>پرسنل</Link>

      
      
    
   </div>

    </div>
    </div>
  )
}

export default MainNav