import React from 'react'

export default function Footer() {
    return (
        <>
           <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>our branches</h3>
                        <a href="#"> <i className="fas fa-arrow-right" /> india </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> USA </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> france </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> africa </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> Japan </a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#"> <i className="fas fa-arrow-right" /> home </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> about </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> menu </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> review </a>
                        <a href="#"> <i className="fas fa-arrow-right" /> book </a>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#"> <i className="fas fa-phone" /> +123-456-7890 </a>
                        <a href="#"> <i className="fas fa-phone" /> +111-222-3333 </a>
                        <a href="#"> <i className="fas fa-envelope" /> shaikhanas@gmail.com </a>
                        <a href="#"> <i className="fas fa-envelope" /> mumbai, india = 400104 </a>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#"> <i className="fab fa-facebook" /> facebook </a>
                        <a href="#"> <i className="fab fa-twitter" /> twitter </a>
                        <a href="#"> <i className="fab fa-twitter" /> twitter </a>
                        <a href="#"> <i className="fab fa-instagram" /> instagram </a>
                        <a href="#"> <i className="fab fa-linkedin" /> linkedin </a>
                    </div>
                </div>
                <div className="credit"> creatd by <span>mr. web designer </span> Rebuild in React by <span>Rohan Sadhukhan</span>  | all rights reserved </div>
            </section>
 
        </>
    )
}
