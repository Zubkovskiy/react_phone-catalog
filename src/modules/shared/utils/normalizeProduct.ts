import { Model } from '../../../types/Model';
import { NormalizedProduct } from '../../../types/NormalizedProduct';
import { Product } from '../../../types/Product';

export const normalizeProduct = (
  product: Model | Product,
): NormalizedProduct => {
  if ('namespaceId' in product) {
    return {
      id: product.id,
      name: product.name,
      fullPrice: product.priceRegular,
      price: product.priceDiscount,
      screen: product.screen,
      capacity: product.capacity,
      ram: product.ram,
      image: product.images[0],
    };
  }

  return {
    id: product.id,
    name: product.name,
    fullPrice: product.fullPrice,
    price: product.price,
    screen: product.screen,
    capacity: product.capacity,
    ram: product.ram,
    image: product.image,
  };
};
