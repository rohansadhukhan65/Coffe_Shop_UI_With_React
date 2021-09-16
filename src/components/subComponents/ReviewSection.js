import React,{useEffect,useRef} from 'react'

// import swiper
import Swiper from 'swiper/swiper-bundle';
import '../../../node_modules/swiper/swiper.min.css';


// import images
import pic1 from '../../img/review/pic-1.png';
import pic2 from '../../img/review/pic-2.png';
import pic3 from '../../img/review/pic-3.png';
import pic4 from '../../img/review/pic-4.png';

export default function ReviewSection() {
        // init Swiper:
        const swiper = useRef(null)
        useEffect(()=>{
            swiper.current=new Swiper(".review-slider", {
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                loop : true,
                grabCursor: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                },
        });
        
        },[])
   


    return (
        <>
            <section className="review" id="review">
                <h1 className="heading"> reviews <span>what people says</span> </h1>
                <div className="swiper review-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left" />
                        <i className="fas fa-quote-right" />
                        <img src={pic1} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>
                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left" />
                        <i className="fas fa-quote-right" />
                        <img src={pic2} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>
                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left" />
                        <i className="fas fa-quote-right" />
                        <img src={pic3} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>
                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left" />
                        <i className="fas fa-quote-right" />
                        <img src={pic4} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                </section>

        </>
    )
}
