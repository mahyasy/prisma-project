import React from 'react'
import { useState } from 'react'




const AddPersonel = ({onAdd}) => {
     const [name,setName]=useState('');
     const[lastName,setLast]=useState('');
     const[idCar,setId]=useState('');
     const[num,setNum]=useState('');
     const[email,setEmail]=useState('');
     const[address,setAddress]=useState('');
     const[present,setPresent]=useState('');
     const[info,setInfo]= useState('');
     const[pass , setPass]=useState('')
     

     const HandleSub =(e)=>{
          e.preventDefault();
         if(!name){
          alert('please fill the gaps');
          return;
         }
         onAdd({name,lastName,idCar,email,address,present,info,pass});
         setName('');setLast('');setId('');
         setNum('');
         setEmail('');
         setAddress('');setPresent('');setInfo('');
         setPass('')
         
     }
  return (
    <div>
     
     <div class="wrapper px-1">
     <div class="text-center mt-1 name " id='name'>
           <span className='prisma' > prisma <img  className="logo"></img></span>
        </div>
        <form onSubmit={HandleSub} class="p-5 mt-5 px-1 ">
          <div className='row'>
               <input className='col personel' value={name} onChange={(e)=>setName(e.target.value)} placeholder='نام'></input>
               <input className='col personel'  value={lastName} onChange={(e)=>setLast(e.target.value)} placeholder='نام خانوادگی'></input>
          </div>
          <div className='row mt-5'>
          <input className='col personel'value={idCar} onChange={(e)=>setId(e.target.value)} placeholder='کد ملی'></input>
          <input className='col personel' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='ایمیل'></input>
              
               
          </div>
          <div className='row mt-5'>
          <input className='col personel' value={num} onChange={(e)=>setNum(e.target.value)} placeholder='شماره همراه'></input>
               <input className='col personel' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='آدرس'></input>

               <div className='row mt-5'>
          <input className='col personel' value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='رمز ورود'></input>
 
          </div> 
          </div>
          <div className='row mt-5'>
          <input className='col personel' value={present} onChange={(e)=>setPresent(e.target.value)} placeholder='روش ها حضور'></input>
               <input className='col personel' value={info} onChange={(e)=>setInfo(e.target.value)} placeholder='مشخصات کاری'></input>
              
               
          </div>
          
          

            <button class="btn btn-primary mt-5">تایید</button>

            </form>
        </div>
    
    </div>
  )
}

export default AddPersonel