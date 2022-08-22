import React from 'react'
import gold from "../images/gold.jpg";
import sillver from "../images/sillver.jpg";
import bronze from "../images/bronze.jpg";


const Cards = () => {
  return (
  <div className='mt-4'>
   <div class="row row-cols-4 row-cols-md-4 g-5">
    <div className='rapper px-1'>
  <div class="col">
    <div class="card h-100">
      <img src={gold} class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">طرح طلایی</h5>
        <p class="card-text">
          تعداد پرسنل:  بی نهایت
          دستگاه ها:  همه دستگاه ها
          
 
        </p>
      </div>
      <div class="card-footer">
   <button className='btn btn-primary'>تایید</button>
      </div>
    </div>
  </div>
  </div>
  <div className='rapper px-1'>
  <div class="col">
    <div class="card h-100">
      <img src={sillver} class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">طرح نقره ای</h5>
        <p class="card-text"> 
        تعداد پرسنل: 10 نفر
        <br></br>
        دستگاه ها:GPSوwifi
        </p>
      </div>
      <div class="card-footer">
     <button className='btn btn-primary'>تایید</button>
      </div>
    </div>
  </div>
  </div>
  <div className='rapper px-1'>
  <div class="col">
    <div class="card h-100">
      <img src={bronze} class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">طرح برنز</h5>
        <p class="card-text">
        تعداد پرسنل: 5 نفر
        <br></br>
        دستگاه ها:
        GPS
        <br/>
        <p></p>
        <p></p>
      
        </p>
      </div>
      <div class="card-footer ">
      <button className='btn btn-primary '>تایید</button>
      </div>
    </div>
  </div>
  </div>
</div>
    
 </div>
  )
}

export default Cards