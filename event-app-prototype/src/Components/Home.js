import React from 'react';
import Navbar from './NavBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import '../Style/HomePage.css'
import { Pagination } from 'swiper/modules';

const Home = () => {
    const [isLogin, setIsLogin] = React.useState(true);

    return (
        <div>
            <Navbar />
            {isLogin ? (

                <div className='homePage'>
                    <div className='homePageHeader'>
                        <h1>Photograpghy</h1>
                    </div>
                    <div className='interestContainer'>


                        <Swiper
                         slidesPerView={3}
                         spaceBetween={30}
                         pagination={{
                           clickable: true,
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                        >
                            {/* List of Tetimoial */}

                            { Array.from({ length: 10 }).map((_, index) => {
                                return (

                                    <SwiperSlide className="swiperSlide" key={index}>
                                        <div className="interestBox">
                                            <div className="interestImg">
                                                <div className="interestIcon">
                                                    Photograpghy
                                                </div>
                                            </div>
                                            <div className="interestContent">
                                                <h3>Photograpghy</h3>
                                                <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>

                                            </div>


                                        </div>
                                    </SwiperSlide>


                                );
                            })}

                        </Swiper>

                    </div>


                </div>




            ) : (
                <div>Home when not logged in</div>
            )}
        </div>
    );
}

export default Home;
