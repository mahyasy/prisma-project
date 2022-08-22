import React from 'react';
import {FaWifi,FaBluetoothB,MdArrowDropDown} from 'react-icons/fa';




const Present = () => {
  return (
    <div>
      <div class="row " id='PrContainer'>
					<div class="col">
          <div class="font_farsi m-subheader ">
                <div class="font_farsi d-flex align-items-center">
                    <div class="font_farsi mr-auto">
                        <h3 class="font_farsi m-subheader__title "> - روش های حضور</h3>
                    </div>
                    </div>
                    </div>
						<div class="row">
							<div class="col" id='Pr-Col'>
								<div class="dropdown d-block">
								  <button class="btn mb-4 mt-5 mb-md-3  btn-block " 
								    type="button"  id='first-btn'
								     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <FaWifi ></FaWifi>
		   
								  </button>
								  <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
								    <h6 class="dropdown-item" href="#">نام وای فای را وارد کنید</h6>
								    <input class="dropdown-item" type='text' placeholder='نام وای فای'style={{  border:"1px solid black",borderRadius:"10px"}}></input>
								    <button className='btn  mt-4 mx-3' style={{backgroundColor:"#8bbabb"}}>ثبت</button>
								   
								  </div>
								</div>
							</div>
                              <div class="col" id='Pr-Col'>
								<div class="dropdown d-block" >
								  <button id="second-btn" class="btn mb-4 mt-5 mb-md-2 btn-primary btn-block "  type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<FaBluetoothB ></FaBluetoothB>

								  </button>
								  <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
								    <h6 class="dropdown-item" href="#">کد مک آدرس را وارد کنید</h6>
								    <input class="dropdown-item" type='text'  placeholder='مک آدرس'style={{  border:"1px solid black",borderRadius:"10px"}}></input>
								    <button className='btn  mt-4 mx-3' style={{backgroundColor:"#6495ED"}}>ثبت</button>
								   
								  </div>
								</div>
							</div>
                               <div class="col" id='Pr-Col'>
								<div class="dropdown d-block">
								  <button class="btn mb-4 mt-5 mb-md-2  btn-block " id='third-btn'  type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   QrCode
								  </button>
								  <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
								  <h6 class="dropdown-item" href="#">کد شرکت را وارد کنید</h6>
								    <input class="dropdown-item" type='text'  placeholder='کد شرکت'style={{  border:"1px solid black",borderRadius:"10px"}}></input>
								    <button className='btn  mt-4 mx-3' style={{backgroundColor:"#b96b9f"}}>ثبت</button>
								  </div>
								</div>
							</div>
                                  <div class="col" id='Pr-Col'>
								<div class="dropdown d-block">
								  <button class="btn mb-4 mt-5  btn-block " id="forth-btn" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   GPS
								  </button>
								 
								</div>
							</div>
						</div>
					</div>
				</div>

    </div>
  )
}

export default Present