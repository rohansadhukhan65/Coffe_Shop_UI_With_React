import React,{useState} from 'react'

// import images
import HomeImgOne from '../../img/home/home-img-1.png';
import HomeImgTwo from '../../img/home/home-img-2.png';
import HomeImgThree from '../../img/home/home-img-3.png';

export default function HeroSection() {
    const [img , imgChange] = useState(HomeImgOne);
    const  changeImgfun =( a)=>{
        
    }
    return (
        <>
           <section className="home" id="home">
            <div>
                <div className="row">
                    <div className="content">
                        <h3>fresh coffee in the morning</h3>
                        <a href="#" className="btn">buy one now</a>
                    </div>
                    <div className="image">
                        <img src={img} className="main-home-image" alt="" />
                    </div>
                </div>
                <div className="image-slider">
                    <img onClick={(e)=>{ imgChange(HomeImgOne) }} src={HomeImgOne} alt="" />
                    <img onClick={(e)=>{ imgChange(HomeImgTwo) }} src={HomeImgTwo} alt="" />
                    <img onClick={(e)=> { imgChange(HomeImgThree) }} src={HomeImgThree} alt="" />
                </div>
            </div>

            </section> 
        </>
    )
}
