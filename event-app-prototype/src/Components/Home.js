import React from 'react';
import Navbar from './NavBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import '../Style/HomePage.css'
// import { Pagination } from 'swiper/modules';
import peopleIcon from '../Images/people.png'

const Home = () => {
    const [isLogin, setIsLogin] = React.useState(false);

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
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            //  modules={[Pagination]}
                            className="mySwiper"
                        >
                            {/* List of Tetimoial */}

                            {Array.from({ length: 10 }).map((_, index) => {
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
                                                {/* <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                                <div className='attendAndincomingEvent'>
                                                    <div className='attendEvent'>
                                                        <img src={peopleIcon} alt='' />
                                                        <p>10 Members</p>
                                                    </div>
                                                    <div className='incomingEvent'>
                                                        <p>18 Incoming Event</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="joinBtn">Join</button>

                                        </div>
                                    </SwiperSlide>


                                );
                            })}

                        </Swiper>

                    </div>

                    <div className='homePageHeader sub'>
                        <h1>Gaming</h1>
                    </div>
                    <div className='interestContainer'>


                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            //  modules={[Pagination]}
                            className="mySwiper"
                        >
                            {/* List of Tetimoial */}

                            {Array.from({ length: 10 }).map((_, index) => {
                                return (

                                    <SwiperSlide className="swiperSlide" key={index}>
                                        <div className="interestBox">
                                            <div className="interestImg">
                                                <div className="interestIcon">
                                                    Gaming
                                                </div>
                                            </div>
                                            <div className="interestContent">
                                                <h3>Gaming</h3>
                                                {/* <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                                <div className='attendAndincomingEvent'>
                                                    <div className='attendEvent'>
                                                        <img src={peopleIcon} alt='' />
                                                        <p>10 Members</p>
                                                    </div>
                                                    <div className='incomingEvent'>
                                                        <p>18 Incoming Event</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="joinBtn">Join</button>

                                        </div>
                                    </SwiperSlide>


                                );
                            })}

                        </Swiper>

                    </div>


                    <div className='homePageHeader sub'>
                        <h1>Outdoor</h1>
                    </div>
                    <div className='interestContainer'>


                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            //  modules={[Pagination]}
                            className="mySwiper"
                        >
                            {/* List of Tetimoial */}

                            {Array.from({ length: 10 }).map((_, index) => {
                                return (

                                    <SwiperSlide className="swiperSlide" key={index}>
                                        <div className="interestBox">
                                            <div className="interestImg">
                                                <div className="interestIcon">
                                                    Outdoor
                                                </div>
                                            </div>
                                            <div className="interestContent">
                                                <h3>Outdoor</h3>
                                                {/* <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                                <div className='attendAndincomingEvent'>
                                                    <div className='attendEvent'>
                                                        <img src={peopleIcon} alt='' />
                                                        <p>10 Members</p>
                                                    </div>
                                                    <div className='incomingEvent'>
                                                        <p>18 Incoming Event</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="joinBtn">Join</button>

                                        </div>
                                    </SwiperSlide>


                                );
                            })}

                        </Swiper>

                    </div>




                </div>

            ) : (
                <div className='centeredContainer'>
                    <div className='notLoginPage'>
                        <div className='header'>Find your passion & interest and connect with others students</div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            //  modules={[Pagination]}
                            className="mySwiper"
                        >
                            {/* List of Tetimoial */}

                            {Array.from({ length: 10 }).map((_, index) => {
                                return (

                                    <SwiperSlide className="swiperSlide" key={index}>
                                        <div className="interestBox">
                                            <div className="interestImg">
                                                <div className="interestIcon">
                                                    Outdoor
                                                </div>
                                            </div>
                                            <div className="interestContent">
                                                <h3>Outdoor</h3>
                                                {/* <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                                <div className='attendAndincomingEvent'>
                                                    <div className='attendEvent'>
                                                        <img src={peopleIcon} alt='' />
                                                        <p>10 Members</p>
                                                    </div>
                                                    <div className='incomingEvent'>
                                                        <p>18 Incoming Event</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="joinBtn">Join</button>

                                        </div>
                                    </SwiperSlide>


                                );
                            })}

                        </Swiper>

                    </div>
                </div>
            )}
        </div>

    );
}

export default Home;
