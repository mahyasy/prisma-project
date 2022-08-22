import axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import logo from "../images/logo.png";
import $ from 'jquery';
import PinInput from 'react-pin-input';



class Register2 extends React.Component {
    state={
     account:{
          email:''
     },
   errors:[],
   sending:false,
   PincodeData :""
    }




 schema = yup.object().shape({
     email:yup.string().required("رمز   یک بار مصرف را وارد کنید")
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
               this.setState({errors:['رمز صحیح نیست']})
               
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
        <form onSubmit={this.handleSub} class="p-3 mt-2 px-1 ">
        <div class="form-outline mb-4">
             </div>
             <div class=" d-flex align-items-center">
     
               

           
             <PinInput 
  length={4} 
  initialValue=""
  
  
  type="numeric" 
  inputMode="number"
  style={{padding: '10px',textAlign:"center",marginRight:"-10px"}}  
  inputStyle={{border:"1px solid black",  borderRadius:"10px",display:"inline",width:"20%",
  boxShadow: "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff"}}
  inputFocusStyle={{borderColor: 'black'}}
  onComplete={(value, index) => {}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-7_@./#&+-]*$/}
/>
            
                

            </div>
            <button class="btn btn-primary mt-5" style={{'marginRight':"79px"}}>تایید</button>
            <div class="font_vazir row my-4">
                                    <div class="font_vazir col-12">
                                        <div class="font_vazir custom-control custom-control-alternative custom-checkbox">
                                           
                          <span>

                         
                              <span style={{color:"blue"}}> ارسال مجدد رمز عبور</span>
                              

                          </span>
                                        
                                        </div>
                                    </div>
                                </div>

            </form>
        </div>
    
    
    </div>
  )
     }
}

export default Register2