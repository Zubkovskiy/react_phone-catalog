// ? Зробити кнопку reload при errorMessage.

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../ProductCard';

import { Navigation } from 'swiper/modules';

import { Model } from '../types/Model';

import 'swiper/css';
import 'swiper/css/navigation';

import global from '../../../shared/globalStyles.module.scss';
import styles from './ProductsSlider.module.scss';

type Props = {
  models: Model[];
  title: string;
  discount?: boolean;
};

export const ProductsSlider: React.FC<Props> = ({
  models,
  title,
  discount,
}) => {
  return (
    <div className={styles.models_list}>
      <div className={styles.models_top}>
        <h2 className={global.subtitle}>{title}</h2>

        <div className={styles.models_nav}>
          <div className={styles.prev}></div>
          <div className={styles.next}></div>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        modules={[Navigation]}
        className="newModelsSlider"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
          disabledClass: styles.disabled,
        }}
        breakpoints={{
          320: { slidesPerView: 1.4, slidesPerGroup: 1 },
          640: { slidesPerView: 2.4, slidesPerGroup: 2 },
          1200: { slidesPerView: 4, slidesPerGroup: 4 },
        }}
      >
        {models.map(model => (
          <SwiperSlide key={model.id}>
            <ProductCard model={model} discount={discount} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
