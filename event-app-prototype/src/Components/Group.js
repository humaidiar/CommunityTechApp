import React from 'react';
import NavBar from './NavBar';
import peopleIcon from '../Images/people.png';
import pin from '../Images/pin.png';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import '../Style/HomePage.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Style/Group.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Group = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5001/events', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setEventData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <NavBar />
      <div className='groupContainer'>
        <div className='groupBk' />
        <div className='groupContent'>
          <div className='groupHeader'>
            <h1>Group Name</h1>
            <button>Join</button>
          </div>
          <div className='groupInfo'>
            <img src={peopleIcon} alt='people' />
            <h2>200 members</h2>
          </div>
          <h2>Up coming activities</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            //  modules={[Pagination]}
            className='mySwiper'
          >
            {/* List of Tetimoial */}

            {eventData.map((event) => {
              return (
                <SwiperSlide className='swiperSlide' key={event.index}>
                  <div className='eventBox'>
                    <h3 className='eventDate'>{event.date}</h3>
                    <h1 className='eventTitle'>{event.name}</h1>
                    <div className='locationBox'>
                      <img src={pin} alt='' />
                      <p>{event.address}</p>
                    </div>
                    <div className='bottmInfo'>
                      <div className='eventInfo'>
                        <div className='attend'>
                          <h3>8 attendees</h3>
                          <div className='spotLeft'>
                            <h3> 2 spot left</h3>
                          </div>
                        </div>
                        <div className='eventBtn'>
                          <button>Going</button>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Group;
