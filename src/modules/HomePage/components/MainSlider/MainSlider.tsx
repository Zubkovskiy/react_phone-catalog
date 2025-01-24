import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './MainSlider.module.scss';

import slide_1 from '/img/home/Banner.jpg';

export const MainSlider = () => {
  return (
    <div className={styles.swiper_container}>
      <div className={styles.prev}></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.main_slider}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <img src={slide_1} alt="slide_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_1} alt="slide_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_1} alt="slide_1" />
        </SwiperSlide>
      </Swiper>

      <div className={styles.next}></div>
    </div>
  );
};
