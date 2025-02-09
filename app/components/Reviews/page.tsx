'use client';

import React from 'react';
import Image from 'next/image';
import rev1 from '@/public/assets/reviews/author1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Reviews: React.FC = () => {
  const arr: Array<null> = Array.from({ length: 4 });

  return (
    <div className="mb-44 w-full px-10 lg:pb-20 lg:max-w-[1500px] lg:mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={2} // Two slides at once
        loop={true} // Infinite loop
        autoplay={{
          delay: 3000, // Delay between slides (3 seconds)
          disableOnInteraction: false, // Keeps autoplay active after interaction
        }}

        
          breakpoints={{
            10: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
     
        grabCursor={true} // Interactive grab cursor
        modules={[Autoplay]} // Enable Autoplay module
      >
        {arr.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="border border-blue rounded-xl p-10 italic text-3xl text-center">
              <blockquote>
                &ldquo;Financial planners help people to gain knowledge about how to invest and save their money the most
                efficient way.&rdquo;
              </blockquote>

              <div>
                <Image src={rev1} alt="Reviewer" className="rounded-full mx-auto my-4" />
                <p className="text-darkgray text-xl py-2">Kunal</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
