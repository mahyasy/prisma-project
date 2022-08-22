import axios from 'axios';
import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom'

const BlogDetails = () => {
     const [user,setUser]=useState({})
     const {id}= useParams();
     let Navigate = useNavigate();
     useEffect(()=>{
          async function fetchData(){
               const response = await axios.get(`https://reqres.in/api/users/${id}`);
               setUser(response.data.data)
               

               
          }
          fetchData();
     },[])
  return (
    <div >

   <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<div  class="col-lg-6 col-sm-6" style={{"textAlign":"center",marginLeft:"200px"}}>
    <div class="card hovercard">
        <div class="card-background">
            <img class="card-bkimg" alt="" />
    
        </div>
        <div class="useravatar">
            <img alt="" style={{"borderRadius":"50%"}} src={user.avatar}/>
        </div>
        <div class="card-info"> <span class="card-title">{user.first_name}{user.last_name}</span>

        </div>
    </div>
    

        <div class="well">
      <div class="tab-content">
        <div class="tab-pane fade in active" id="tab1">
   
      </div>
    </div>
    <div className='row'>
     <span className='col-6'><h4>نام:{user.first_name}</h4></span>
     <span className='col-6'><h4>نام خانوادگی:{user.last_name}</h4></span>
    </div>
    <div className='row'>
     <span className='col-6'><h4>کد ملی:04409328</h4></span>
     <span className='col-6'><h4>رمز ورود:24336</h4></span>
    </div>
    <div className='row'>
     <span className='col-6'><h6>ایمیل:{user.email}</h6></span>
     <span className='col-6'><h6>تلفن:09127551202</h6></span>
    </div>
    <div className='row'>
     <span className='col-6'><h6>آدرس:تهران-شهرک آزادگان</h6></span>

    </div>
    <div className='row mt-5'>
     <span className='col-6'>
     <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    روش های حضور
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">بلوتوث</button>
    <button class="dropdown-item" type="button">وای فای</button>
    <button class="dropdown-item" type="button">جی پی اس</button>
  
  </div>
</div>
     </span>
     <span className='col-6'>
     <div class="dropdown d-block">
								  <button class="btn " style={{backgroundColor:"#b96b9f",color:"white"}}  type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								  مشخصات کاری
								  </button>
								  <div class="dropdown-menu dropdown-menu-left" style={{width:"250px",textAlign:"center"}} aria-labelledby="dropdownMenuButton">
                                             <div className='row'>
                                             <h6  class=" col-6" href="#">تاریخ شروع</h6>
                                             <h6  class=" col-6" href="#">زمان شروع</h6>
                                             </div>
                                             <div className='row'>
                                             <h6  class=" col-6" href="#">تاریخ شروع</h6>
                                             <h6  class=" col-6" href="#">زمان شروع</h6>
                                             </div>
								
								    
								    <button className='btn  mt-4 mx-3' style={{backgroundColor:"#b96b9f"}}>ثبت</button>
								  </div>
						      	</div>
						
    



     </span>
    </div>
   
    
    </div>
            
    
   </div>
   
     
    </div>
  )
}

export default BlogDetails
