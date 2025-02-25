// ! Переробити картинки слайдів

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './MainSlider.module.scss';

import slide_1_1 from '/img/home/banner-1-1.jpg';
import slide_1_2 from '/img/home/banner-1-2.jpg';

export const MainSlider = () => {
  return (
    <>
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
            el: `.${styles.pagination}`,
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bullet_active,
          }}
          navigation={{
            nextEl: `.${styles.next}`,
            prevEl: `.${styles.prev}`,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.main_slider}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <picture>
              <source media="(max-width: 639.9px)" srcSet={slide_1_2} />
              <img src={slide_1_1} alt="slide_1" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width: 639.9px)" srcSet={slide_1_2} />
              <img src={slide_1_1} alt="slide_1" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width: 639.9px)" srcSet={slide_1_2} />
              <img src={slide_1_1} alt="slide_1" />
            </picture>
          </SwiperSlide>
        </Swiper>

        <div className={styles.next}></div>
      </div>

      <div className={styles.pagination}></div>
    </>
  );
};
