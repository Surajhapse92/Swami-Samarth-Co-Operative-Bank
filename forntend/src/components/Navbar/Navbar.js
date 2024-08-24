import React from 'react'
import logo from '../../assets/Logo/logo.png'
import $ from 'jquery'; 
import './Navbar.css'
export default function Navbar() {
     
    // jQuery(".menu-toggle").click(function () {
    //     jQuery(".main-navigation").toggleClass("toggled");
    // });

    // jQuery(".header-menu ul li a").click(function () {
    //     jQuery(".main-navigation").removeClass("toggled");
    // });
   
    $(document).ready(function(){
        $(".menu-toggle").click(function () {
        $(".main-navigation").toggleClass("toggled");
        });
       
    
        });
    $(document).ready(function(){
        $(".header-menu ul li a").click(function () {
            $(".main-navigation").removeClass("toggled");
        });
       
    
        });

       
  return (
    <div>
    
    
    <header class="site-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header-logo">
                        <a href="index.html">
                            <img src={logo} width="130" height="40" alt="Logo"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="main-navigation">
                        <button class="menu-toggle"><span></span><span></span></button>
                        <nav class="header-menu">
                            <ul class="menu food-nav-menu">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                        <div class="header-right">
                            <form action="#" class="header-search-form for-des">
                                <input type="search" class="form-input" placeholder="Search Here..."/>
                                <button type="submit">
                                    <i class="uil uil-search"></i>
                                </button>
                            </form>
                            <a href="" class="header-btn header-cart">
                                <i class="uil uil-shopping-bag"></i>
                                <span class="cart-number"></span>
                            </a>
                            <a href="" class="header-btn">
                                <i class="uil uil-user-md"></i>
                            </a>
                            <a href="" class="header-btn">
                                <i class="uil uil-sign-in-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
     

    </div>
  )
}
