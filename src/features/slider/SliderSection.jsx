import { useSelector } from 'react-redux';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function SliderSection() {
    const slides = useSelector(state => state.slider.slider);
  return (
    <section className="bg-white py-12">
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={1000}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={true}
        >
            {slides.map(slide => (
            
            <SwiperSlide key={slide.id}>    
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                    <img src={slide.image} alt={slide.title} className="w-full object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{slide.title}</h3>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};