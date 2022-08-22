import React from 'react'
import $ from 'jquery';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';



const HomeSide = () => {
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
                
                    <img src={logo} style={{width:"50px",height:"50px"}} ></img>
                    <strong>منو اصلی</strong>

                    
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                      
                            
                   <Link to='/pishkhan'>پیشخوان</Link>
                    
                        
                        
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                   <Link to='/tarh'>تمدید طرح</Link> 
                        </a>
                        
                       
                    </li>
                   
                    <li>
                       
                        <a href="#cSubmenu" data-toggle="collapse" aria-expanded="false">
                           
                           تعاریف اولیه
                        </a>
                        <ul class="collapse list-unstyled" id="cSubmenu">
                            <li><Link to='/branch'>شعب</Link></li>
                     

                        </ul>
                    </li>
                  
                    <li>
                        
                        <a href="#wSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                          تعریف ها
                        </a>
                        <ul class="collapse list-unstyled" id="wSubmenu">
                            <li><a href="#">بررسی درخواست عضویت</a></li>
                            <li><a href="#">مدیریت شیفت</a></li>
                            <li><a href="#">مدیریت محدوده</a></li>
                            <li><a href="#">مدیریت نقش </a></li>
                            <li><a href='#'></a>مدیریت تگ بلوتوث</li>
                            <li><a href='#'>  مدیریت وای فای</a></li>
                        </ul>
                    </li>
                    <li>
                        
                        <a href="#pSubmenu" data-toggle="collapse" aria-expanded="false">
                          
                     گزارش سراسری
                        </a>
                     
                    </li>
                    <li>
                        
                        <a href="#pSubmenu" data-toggle="collapse" aria-expanded="false">
                          
                        خروج
                        </a>
                     
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

export default HomeSide