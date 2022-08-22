import React from 'react'
import { useState } from 'react';
import logo from "../images/logo.png";

const Register3 = () => {
  const[inpt,setInput]=useState({
    name:"",tel:"",Rname:""

})
  const handleSub =(e)=>{
    e.preventDefault();

  }
  const handleChange=async(e)=>{
    const input = e.currentTarget;
    const account ={...inpt};
    account[input.name]=input.value;
    setInput({inpt:account})
  }
  return (
    <div>
     <div class="wrapper px-1">
     <div class="text-center mt-1 name " id='name'>
         
           <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Prisma <img src={logo} className="imgL"></img></h3>
            <h6 className='mb-3'>ثبت نام شرکت یا ارگان جدید</h6>
        </div>
        <form onSubmit={handleSub} class="p-5 mt-5 px-1 ">
          <div className='row'>
               <input className='col personel' value={inpt.name} name="name" onChange={handleChange} placeholder=' نام شرکت'></input>
               <input className='col personel' type='number' value={inpt.tel} name='tel' onChange={handleChange} placeholder='تلفن ثابت'></input>
          </div>
          <div className='row mt-5'>
          <input className='col personel' placeholder='نام مسِول'></input>
          <input className='col personel'  placeholder="نام خانوادگی مسِول"></input>
              
               
          </div>
          <div className='row mt-5'>
          <input className='col personel' placeholder='شماره همراه'></input>
               <input className='col personel'  placeholder='نام کاربری'></input>

               <div className='row mt-5'>
          <input className='col personel'  placeholder="کلمه عبور"></input>
          <input className='col personel'  placeholder='تکرار کلمه عبور'></input>
          </div> 
          </div>
          <div className='row mt-5'>
          <input className='col personel'  placeholder='آدرس'></input>

              
               
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


            <button class="btn btn-primary mt-5">تایید</button>

            </form>
        </div>
    
    </div>
  )
}

export default Register3