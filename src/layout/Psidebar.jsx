import React from 'react'
import $ from 'jquery';
import logo from "../images/logo.png"



const Psidebar = () => {
     $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
              $('#sidebar').toggleClass('active');
          });
      });
  return (
    <div>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

        <link rel="stylesheet" href="style4.css"/>
    </head>
    <body>



        <div class="wrappers">
          
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>پروفایل شرکت</h3>
                    <img src={logo} style={{width:"50px",height:"50px"}} ></img>
                    <strong>ادمین اصلی</strong>

                    
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                            شعبه
                        </a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">ایجاد شعبه جدید</a></li>
                            <li><a href="#">ثبت ساعات کاری</a></li>
                            <li><a href="#">ثبت آدرس</a></li>
                        </ul>
                    </li>
                  
                    <li>
                        
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                         کارتابل
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">مشاهده درخواست مرخصی</a></li>
                            <li><a href="#">مشاهده تیکت پشتیبانی </a></li>

                        </ul>
                    </li>
                   
                    <li>
                       
                        <a href="#cSubmenu" data-toggle="collapse" aria-expanded="false">
                           
                            طرح
                        </a>
                        <ul class="collapse list-unstyled" id="cSubmenu">
                            <li><a href="#">لیست طرح ها</a></li>
                            <li><a href="#">تمدید طرح </a></li>

                        </ul>
                    </li>
                  
                    <li>
                        
                        <a href="#wSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                            پرسنل
                        </a>
                        <ul class="collapse list-unstyled" id="wSubmenu">
                            <li><a href="#">ثبت پرسنل</a></li>
                            <li><a href="#">لیست ویرایش و فعال و غیر فعال کردن </a></li>
                            <li><a href="#">تخصیص سمت و نقش به پرسنل </a></li>
                            <li><a href="#">ثبت ماموریت روزانه و ساعتی  </a></li>
                            <li><a href='#'></a>مشخص کردن نحوه حضور زدن</li>
                            <li><a href='#'>  نحوه راستی ازمایی</a></li>
                        </ul>
                    </li>
                    <li>
                        
                        <a href="#pSubmenu" data-toggle="collapse" aria-expanded="false">
                          
                           پشتیبانی 
                        </a>
                        <ul class="collapse list-unstyled" id="pSubmenu">
                            <li><a href="#">ارسال,دریافت و پاسخ به تیکت</a></li>

                        </ul>
                    </li>
             
                
                </ul>

               
            </nav>

            <div id="content">

                <nav>
                    <div class="container-fluid">

                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                <i class="glyphicon glyphicon-align-left"></i>
                                <span></span>
                            </button>
                        </div>

                 
                    </div>
                </nav>

            
             
            </div>
        </div>






         <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        
    </body>
    </div>
  )
}

export default Psidebar