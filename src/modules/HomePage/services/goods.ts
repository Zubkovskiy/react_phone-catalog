import { Model } from '../components/types/Model';

export const newModelsFetch = (): Promise<Model[]> => {
  return fetch('/api/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return response.json();
    })
    .then((data: Model[]) => {
      const sortProducts = data.sort((a, b) => b.year - a.year);
      const uniqueColors = new Set<string>();

      return sortProducts.filter(product => {
        if (!uniqueColors.has(product.color)) {
          uniqueColors.add(product.color);

          return true;
        }

        return false;
      });
    });
};

export const hotPricesFetch = (): Promise<Model[]> => {
  return fetch('/api/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return response.json();
    })
    .then((products: Model[]) => {
      return products.sort((a, b) => b.fullPrice - a.fullPrice);
    });
};
