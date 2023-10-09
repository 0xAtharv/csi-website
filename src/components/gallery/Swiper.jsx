import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import datas from "./images"
// import Galleryy from "./galleryy";
import "../../App.css"
import "./swiper.css"

export default function CompanySwiper() {
    //   const slideObj = [
    //     {
    //       id:1,
    //       info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    //     },
    //     {
    //       id:2,
    //       info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    //     },
    //     {
    //       id:3,
    //       info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    //     }, 
    //     {
    //       id:4,
    //       info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    //     },
    //     {
    //       id:5,
    //       info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    //     },
    //   ];

    return (
      <div className="cssanimation sequence fadeInBottom">
      <div className="font-Inter text-white text-3xl font-bold text-center mt-20 shadow-purple-400">GALLERY</div>
            <div className="flex justify-between p-12 relative mx-20">
            <div className="swiper-prev ">
                    <img src="public/arrow-left-circle-svgrepo-com.svg" alt="prev-image-btn" className="absolute max-md:hidden animate-bounce top-0 left-0 h-10 w-10 ml-2 mt-40 z-20" />
                </div>
                
            <Swiper
                navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                }}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={10}
                // slidesPerView={3}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        420: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                        1280: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                      },
                        
                      }}
                
            >
                    
                 {datas.map((data, i) => {
              return (
                <div className="mx-20 p-10"><SwiperSlide key={i}>

                    <div className='carousel-item w-full md:w-full lg:w-full h-52 relative mx-20 p-2 z-0'>
                    <img src={data.img} alt="" className="w-full h-full" />
                    </div>  
                 
                </SwiperSlide></div>
              );
                 })}
                
            </Swiper><div className="swiper-next m-1">
                    <img src="/right-arrow.svg" alt="next-image-btn" className="absolute max-md:hidden rotate-180  top-0 right-0  h-10 w-10 mr-2 mt-40 z-20 animate-bounce"/>
                    </div>
</div>
        </div>
    );
}
