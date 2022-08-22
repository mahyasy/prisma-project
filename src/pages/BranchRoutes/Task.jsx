import React from 'react'
import { useRef, useEffect,useState } from 'react';
import {FaTrash,FaUserEdit} from 'react-icons/fa';
import {v4} from 'uuid'

const Task = () => {
     const [number, setNumber]=useState(0);
     const [arr,setArr]= useState([]);
     const tbody = useRef();
     const myArr =[{id:1}];
     useEffect(()=>{
          setArr(myArr)
     },[]);
     const handleDel =(event,ok)=>{
          const prevArr = arr;
          //const filter = prevArr.filter(item =>{ return item.id !==ok});
          prevArr.splice(ok,1);
          console.log(prevArr);
          setNumber(number+1)
     };


  const Handler =()=>{
    const prevArr = arr ;
    prevArr.push({id:arr.length+1});
    setArr(prevArr);
    console.log(arr);
    setNumber(number+1)
   
    
  }

  return (
    <div>
      <button className='btn btn-primary m-4' onClick={Handler}>ایجاد سمت جدید+</button>
     <div className='container bdr'>
 <table className='table table-striped bdr '  style={{color:"white"}}>
     <thead className='table-primary' >
          <th  scope='col' >ردیف</th>
          <th scope='col'>سمت</th>
          <th scope='col'>ویرایش</th>
          <th scope='col'>حذف</th>
   
     </thead>
     <tbody ref={tbody}>
          {arr.map((item)=>(<tr key={v4()}>
           <th scope='row' style={{color:"black"}}>{arr.indexOf(item)+1}</th>
           <td><input className='inps'></input></td>
           <td><FaUserEdit style={{color:"black"}}/></td>
           <td><FaTrash className='trash' onClick={(e)=>handleDel(e,arr.indexOf(item))}></FaTrash></td>
           

          </tr>))}

         
          
           
     </tbody>


 </table>
</div>
    </div>
  )
}

export default Task