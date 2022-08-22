import axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import logo from "../images/logo.png"

class Register1 extends React.Component {
    state={
     account:{
          email:''
     },
   errors:[],
   sending:false,
    }



 schema = yup.object().shape({
     email:yup.string().required('شماره تماس یا ایمیل خود را وارد کنید')
    })


    validation =async()=>{
     try {
          const result = await this.schema.validate(this.state.account,{abortEarly:false});
          return result;

          
     } catch (error) {
          console.log(error.errors);
          this.setState({errors:error.errors})
          
     }
    }
    
  

     
     handleSub =async(e)=>{
          e.preventDefault();
        const result = await this.validation();
        console.log(result);
        if(result){
          try {
               this.setState({sending:true})
               const response = await axios.post('https://reqres.in/api/login',result);
         <Navigate to='/register2'/>
              this.setState({sending:false})
               console.log(response)
               
          } catch (error) {
               this.setState({sending:false})
               this.setState({errors:['ایمیل یا شماره موبایل معتبر نیست']})
               
          }
        }
         

     }

      handleChange =async(e)=>{
          const input = e.currentTarget;
          const account = {...this.state.account};
          account[input.name]=input.value;
          this.setState({account})

     }
     render(){
  return (
    <div>
     {this.state.errors.length !==0 &&(
          <div className='alert alert-danger'>
               <ul>
                    {this.state.errors.map((e,i)=><li key={i}>{e}</li>)}
               </ul>
          </div>
     )}
   
     <div class="wrapper px-1">
        
        <div class="text-center mt-1 name " id='name'>
           <span className='prisma' > prisma <img src={logo} className="logo"></img></span>
        </div>
        <form onSubmit={this.handleSub} class="p-5 mt-5 px-1 ">
        <div class="form-outline mb-4">
             </div>
             <div class="form-field d-flex align-items-center">
                <span class=""></span>
                <input type="text" name="email" id="email" value={this.state.account.email} onChange={this.handleChange} placeholder="ایمیل /شماره تلفن"/>
            </div>
            <button class="btn btn-primary mt-5">تایید</button>

            </form>
        </div>
    
    
    </div>
  )
     }
}

export default Register1