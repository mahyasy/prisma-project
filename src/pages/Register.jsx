import React from 'react'
import { useRef } from 'react'
import logo from "../images/logo.png";
import axios from "axios";
import * as yup from 'yup';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


const Register = () => {
  const [acc,setAcc]=useState({
    
      firstName:"",
      address:"",
      phone:"",
      Namem:"",
      lastNamem:"",
      phoneNumber:"",
      UserName:"",
      password:"",
      repassword:""
   
  

  })
const [errors,setError]= useState([])

   
  const schema = yup.object().shape({
    firstName: yup.string().required('عنوان شرکت را پرکنید'),
    address: yup.string().required('آدرس شرکت را پر کنید'),
    phone: yup.string().required("تلفن ثابت شرکت را پر کنید"),
    Namem: yup.string().required('نام پر کنید'),
    lastNamem: yup.string().required('نام خانوادگی را پر کنید'),
    phoneNumber:yup.string().required('تلفن را وارد کنید'),
    UserName: yup.string().required('نام کاربری را پر کنید'),
    password: yup.string().required('کلمه عبور را پر کنید'),
    repassword: yup.string().required('تکرار کلمه عبور را پر کنید'),
  
  

  })
  const validation = async()=>{
    try {
      const result = await schema.validate(acc,{abortEarly:false});
      return result;
      
    } catch (error) {
      console.log(error.errors);
      setAcc({errors:error.errors})

      
    }
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const result = await validation();
    console.log(result);
    if(result){
      try {
        const response = await axios.post('https://reqres.in/api/login',result);
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token);
        <Navigate to="/cards"/>
        console.log(response)

        
      } catch (error) {
        setAcc({errors:['لطفااطلاعات فرم را تکمیل کنید']})
       
        
      }
    }

}
  
 const handleChange = async(e)=>{
  const input = e.currentTarget;
  const acc = {...acc};
  acc[input.name]=input.value;
  setAcc({acc})
 }
  
 


  return (
    <div >
      {errors.length !== 0 && (
        <div className='alert alert-danger'>
          <ul>
            {errors.err.map((e,i)=>(
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}
     
     
     <section  class="vh-100 gradient-custom">
  <div class="container py-5 h-100" >
    <div class="row justify-content-center align-items-center h-100" >
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}} id='wrapper'>
          <div class="card-body p-4 p-md-5 font_vazir">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Prisma <img src={logo} className="imgL"></img></h3>
            <h6 className='mb-3'>ثبت نام شرکت یا ارگان جدید</h6>
     

            <form onClick={handleSubmit}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" onChange={handleChange} value={acc.firstName} name='firstName' id="firstName" class="form-control form-control-lg" />
                    <label class="form-label" htmlFor="firstName" >نام شرکت</label>
                  </div>
                  <div class="form-outline datepicker w-100">
                    <input type="text" name='phone' onChange={handleChange} value={acc.phone} class="form-control form-control-lg" id="phone" />
                    <label htmlFor="phone" class="form-label"> تلفن ثابت</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" name='address' onChange={handleChange} value={acc.address} id="address" class="form-control form-control-lg" />
                    <label class="form-label" htmlFor="address">آدرس</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                

                </div>
           
              </div>


              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="email" name='Namem' onChange={handleChange} value={acc.Namem} id="Namem" class="form-control form-control-lg" />
                    <label class="form-label" htmlFor="Namem">نام مسئول</label>
                  </div>

                </div>

                <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text"  name='lastNamem' onChange={handleChange} value={acc.lastNamem} class="form-control form-control-lg" id="lastNamem" />
                    <label htmlFor="lastNamem" class="form-label">   نام خانوادگی مسئول</label>
                  </div>

                </div>
           
              </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="tel" name='phoneNumber' onChange={handleChange} value={acc.phoneNumber} id="phoneNumber" class="form-control form-control-lg" />
                    <label class="form-label" htmlFor="phoneNumber">تلفن همراه</label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" name='UserName' onChange={handleChange} value={acc.UserName} class="form-control form-control-lg" id="UserName" />
                    <label htmlFor="UserName" class="form-label">   نام کاربری </label>
                  </div>

                </div>
           
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" name='password' onChange={handleChange} value={acc.password} class="form-control form-control-lg" id="password" />
                    <label htmlFor="password" class="form-label"> کلمه عبور </label>
                  </div>

                </div>
           
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text"  name ='repassword' onChange={handleChange} value={acc.repassword} class="form-control form-control-lg" id="repassword" />
                    <label htmlFor="repassword" class="form-label">   تکرار کلمه عبور</label>
                  </div>

                </div>
           
              </div>

              <div class="font_vazir row my-4">
                                    <div class="font_vazir col-12">
                                        <div class="font_vazir custom-control custom-control-alternative custom-checkbox">
                                            <input class="font_vazir custom-control-input" id="customCheckRegister" type="checkbox" />
                                            <label class="font_vazir custom-control-label" for="customCheckRegister">
                          <span>

                            <a href="#">توافق نامه</a>
                              <span> را می پذیرم</span>
                              

                          </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="ورود" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register