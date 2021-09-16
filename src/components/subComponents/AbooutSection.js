import React from 'react'

// import image 
import about_img from '../../img/about/about-img.png'
import about_icon_one from '../../img/about/about-icon-1.png'
import about_icon_two from '../../img/about/about-icon-2.png'
import about_icon_three from '../../img/about/about-icon-3.png'


export default function AbooutSection() {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading"> about us <span>why choose us</span> </h1>    
                <div className="row">
                    <div className="image">
                        <img src={about_img} alt="" />
                    </div>
                    <div className="content">
                        <h3 className="title">what's make our coffee special!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et commodi, ad, doloremque obcaecati maxime quam minima dolore mollitia saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum at autem.</p>
                        <a href="#" className="btn">read more</a>
                        <div className="icons-container">
                            <div className="icons">
                                <img src={about_icon_one} alt="" />
                                <h3>quality coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={about_icon_two} alt="" />
                                <h3>our branches</h3>
                            </div>
                            <div className="icons">
                                <img src={about_icon_three} alt="" />
                                <h3>free delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
