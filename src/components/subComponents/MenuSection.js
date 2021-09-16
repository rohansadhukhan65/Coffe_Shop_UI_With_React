import React from 'react'


// import image
import menu1 from '../../img/menu/menu-1.png';
import menu2 from '../../img/menu/menu-2.png';
import menu3 from '../../img/menu/menu-3.png';
import menu4 from '../../img/menu/menu-4.png';
import menu5 from '../../img/menu/menu-5.png';
import menu6 from '../../img/menu/menu-6.png';


export default function MenuSection() {
    return (
        <>
        <section className="menu" id="menu">
            <h1 className="heading"> our menu <span>popular menu</span> </h1>
            <div className="box-container">
                <a href="#" className="box">
                <img src={menu1} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
                    <span>$8.99</span>
                </div>
                </a>
                <a href="#" className="box">
                <img src={menu2} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
                    <span>$8.99</span>
                </div>
                </a>
                <a href="#" className="box">
                <img src={menu3} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
                    <span>$8.99</span>
                </div>
                </a>
                <a href="#" className="box">
                <img src={menu4} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
                    <span>$8.99</span>
                </div>
                </a>
                <a href="#" className="box">
                <img src={menu5} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
                    <span>$8.99</span>
                </div>
                </a>
                <a href="#" className="box">
                <img src={menu6} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
                    <span>$8.99</span>
                </div>
                </a>
            </div>
        </section>
  
        </>
    )
}
