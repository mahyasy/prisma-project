import React from 'react'

const Button = (props) => {
     const {onthis,toShow}=props;
  return (
    <div>
            <button style={{"backgroundColor":toShow? "red":"",border:"none"}} onClick={onthis} className='btn btn-primary m-4 ' >{toShow ?"x  بستن":"+ثبت پرسنل جدید"}</button>
    </div>
  )
}

export default Button