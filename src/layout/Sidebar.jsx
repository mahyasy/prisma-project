import React, { useState } from 'react'
import $ from 'jquery';
import logo from "../images/logo.png"







const Sidebar = () => {
   
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
                    <h3>ادمین اصلی</h3>
                    <img src={logo} style={{width:"50px",height:"50px"}} ></img>
                    <strong>ادمین اصلی</strong>

                    
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                            پیشخوان
                        </a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">کارتابل</a></li>
                            <li><a href="#">اطلاعات انلاین</a></li>
                            <li><a href="#">لاگها</a></li>
                        </ul>
                    </li>
                  
                    <li>
                        
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                            تنظیمات اولیه
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">ثبت و ویرایش</a></li>
                            <li><a href="#">ثبت سمت ها </a></li>
                            <li><a href="#">فعال و غیرفعال کردن دیوایسها</a></li>
                        </ul>
                    </li>
                   
                    <li>
                       
                        <a href="#cSubmenu" data-toggle="collapse" aria-expanded="false">
                           
                            شرکت های عضو 
                        </a>
                        <ul class="collapse list-unstyled" id="cSubmenu">
                            <li><a href="#">ثبت و ویرایش</a></li>
                            <li><a href="#">لیست شرکتها </a></li>
                            <li><a href="#">تهیه گزارش ورود و خروج</a></li>
                        </ul>
                    </li>
                  
                    <li>
                        
                        <a href="#wSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                            مالی 
                        </a>
                        <ul class="collapse list-unstyled" id="wSubmenu">
                            <li><a href="#">لیست واریزی</a></li>
                            <li><a href="#">لیست پورسانت به بازاریابان </a></li>
                            <li><a href="#">لیست درخواستها واریزی پورسانت به حساب با</a></li>
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

export default Sidebar