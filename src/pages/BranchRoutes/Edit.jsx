import React from 'react'

const Edit = () => {
  const todo = [
    {name:"emma", isDone:false}
  ]
  localStorage.setItem('data',JSON.stringify(todo));
  function myfunction(index){
    let localStorageGet = JSON.parse(localStorage.getItem('data'));
    localStorageGet[index].isDone = !localStorageGet[index].isDone;
    localStorage.setItem('data',JSON.stringify(localStorageGet))
  }
  return (
    <div>

    </div>
  )
}

export default Edit