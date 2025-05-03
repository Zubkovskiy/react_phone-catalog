import { useEffect, useState, useMemo } from 'react';
import { goods } from '../../../services/goods';
import { Product } from '../../../types/Product';

export const useProductDetails = (category?: string, id?: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!category || !id) {
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const fetchedProducts = await goods.productDetailsFetch(category);

        setProducts(fetchedProducts);

        const found = fetchedProducts.find(p => p.id === id);

        if (!found) {
          setError(`Product with id "${id}" not found`);
          setProduct(null);
        } else {
          setProduct(found);
        }
      } catch {
        setError('Failed to fetch product');
        setProduct(null);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category, id]);

  const { colors, capacities } = useMemo(() => {
    if (!product || !product.namespaceId) {
      return { colors: [], capacities: [] };
    }

    const variants = products.filter(
      p => p.namespaceId === product.namespaceId,
    );

    const uniqueColors = Array.from(new Set(variants.map(v => v.color)));

    const sortedCapacities = Array.from(
      new Set(variants.map(v => v.capacity)),
    ).sort((a, b) => {
      const numA = parseInt(a);
      const numB = parseInt(b);

      return numA - numB;
    });

    return { colors: uniqueColors, capacities: sortedCapacities };
  }, [product, products]);

  return { product, colors, capacities, loading, error };
};
