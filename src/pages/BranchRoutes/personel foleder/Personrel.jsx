import Button from './Button'
import { useState } from 'react'
import AddPersonel from './AddPersonel';
import '../../../pages/BranchRoutes/personel foleder/personel.css'
import { BsFillEyeFill, BsFillKeyFill ,BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {FaUserEdit} from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';
import BlogDetails from './BlogDetails';


const Personrel = () => {

const [ list , setList]=useState([
  {id:1 , name:"محیا",lastName:"یوسفی",idCar:"044075",pass:"1234",repas:''
  ,job:"خرید" ,isDone:true},
  {id:2 , name:"علی",lastName:"شاه پسند",idCar:"044075",pass:"9876",repas:'',
  job:"خرید"}
])
const [lists,setLists]=useState({info:[]});
useEffect(()=>{
 async function fetchData(){
  const response = await axios.get('https://reqres.in/api/users');
     console.log(response);
     setLists({info:response.data.data})
 }
 fetchData()
},[])



const onAdd =(item)=>{
  console.log(item);
  const id = list.length+1;
  const newList = {id, ...item};
  setList([...list,newList]);
  console.log(newList)

}



const [show,setShow]= useState(false)


  return (
   <div>
<Button toShow={show} onthis={()=>setShow(!show)} />


        <div className='container bdr mt-5'>
 <table className='table table-striped bdr '  style={{color:"white"}}>
     <thead className='table-primary' >
          <th>ردیف</th>
          <th className='photo'></th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>ساخت رمز ورود مجدد</th>
          <th></th>
          <th></th>
          <th></th>
     </thead>
     <tbody >
          {lists.info.map((item)=>{
            return(
            
            <tr key={item.id}>
           <th scope='row' style={{color:"black"}}  >{item.id}</th>
           <th className='photo'><img style={{"borderRadius":"50%","width":"35px"}} src={item.avatar}></img></th>
           <td className='inps'>{item.first_name}</td>
           <td className='inps'>{item.last_name}</td>
           <td className='inps'>1234</td>
           <td className='inps' >
          <BsFillKeyFill style={{fontSize:'20px'}}></BsFillKeyFill></td>
       <td className='inps'>
       <Link id='Link' to={`/detail/${item.id}`}> مشاهده <BsFillEyeFill></BsFillEyeFill></Link> 
       </td>
       <td className='inps'></td>

          <td className='inps' >ویرایش<FaUserEdit style={{color:"black"}}/></td>  
          </tr>
            )})}
        




 </tbody>
 </table>
</div>
{show &&<AddPersonel onAdd={onAdd}></AddPersonel>}
    </div>
  )
}

export default Personrel