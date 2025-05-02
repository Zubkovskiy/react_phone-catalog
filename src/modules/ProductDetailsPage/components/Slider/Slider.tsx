import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

import styles from './Slider.module.scss';

import { Product } from '../../../../types/Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

type Props = {
  product: Product;
};

export const Slider: React.FC<Props> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0);
    }
  }, [thumbsSwiper]);

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={'auto'}
        spaceBetween={16}
        modules={[Thumbs]}
        className={styles.thumbs}
      >
        {product.images.map((img, i) => (
          <SwiperSlide key={i} className={styles.thumbs__slide}>
            <img src={img} alt={`thumb-${i}`} className={styles.thumbs__img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs, Navigation]}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.main}
      >
        {product.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`main-${i}`} className={styles.main__img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
