import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import R from "../images/R.jpg"

const Login = () => {
  const [UserName,setUserName]=useState('');
  const [password,setPass]=useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(e)
    

  }
 
  return (
    <div >
  <section className="vh-100" >
  <div className="container py-6 h-110 ">
  <div className=" row d-flex justify-content-center align-items-center h-100" >
  <div className="col col-xl-10">
        <div className="card" style={{borderRadius:"1rem"}} id='wrapper'>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img  src={R}
                alt="login form" class="img-fluid" style={{borderRadius: "1rem 0 0 1rem;",height:"100%"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit} >

                  <div class="d-flex align-items-center mb-3 pb-1" style={{'marginRight':'50px'}}>
       
                    <img className='imgL  ' src={logo}></img>
                    <span class="h1 fw-bold  mb-0 ">Prisma</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>سامانه حضور و غیاب</h5>

                  <div class="form-outline mb-4">
                    <input type="email" value={UserName} onChange={(e)=>setUserName(e.target.value)} id="UserName"   className="form-control form-control-lg" />
                    <label class="form-label" htmlFor="UserName" placeholder=''>نام کاربری</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} id="password" className="form-control form-control-lg" />
                    <label class="form-label" htmlFor="password">کلمه عبور</label>
                  </div>

                  <div class=" pt-1 mb-4">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">ورود</button>
                  </div>

                  <a class="small text-muted" href="#!">فراموشی رمز عبور</a>
                  <Link to="/register1">
                  <p class="mb-5 pb-lg-2" style={{Color: "#393f81;"}}>ثبت نام <a href="#!"
                      style={{Color: "#393f81;"}}>ثبت نام</a></p>
                  </Link>
              

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Login