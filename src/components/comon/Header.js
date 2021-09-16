import React, {useState, useEffect} from 'react'


export default function Header() {
    const [tog , setTog] = useState('navbar');
    const [togbtn , setTogbtn] = useState('fas fa-bars');
    const toggle = () => {
        if(tog == 'navbar active')
        { 
            setTog('navbar');
            setTogbtn('fas fa-bars')
        }
        else
        {
            setTog('navbar active');
            setTogbtn('fas fa-times')
        }
    }
    useEffect(()=>{
        window.onscroll =()=>{
            setTog('navbar');
            setTogbtn('fas fa-bars')
        }
    },[])
    return (
        <div>
            <header className="header">

                <div id="menu-btn" onClick={toggle}  className={togbtn} />
                {/* brand */}
                <a href="#" className="logo"> coffee <i className="fas fa-mug-hot"></i></a>
                {/* Menu */}
                <nav className={tog}>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#review">Review</a>
                    <a href="#book">Book</a>
                </nav>
                {/* book a  table */}
                <a href="#" className="btn ">Book a table</a>
            </header>
            
        </div>
    )
}
