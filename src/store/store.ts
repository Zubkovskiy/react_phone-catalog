import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Model } from '../types/Model';

interface StoreState {
  cart: Model[];
  favorites: Model[];
  addToCart: (product: Model) => void;
  removeFromCart: (id: number) => void;
  isInCart: (id: number) => boolean;

  addToFavorites: (product: Model) => void;
  removeFromFavorites: (id: number) => void;
  isInFavorites: (id: number) => boolean;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],

      addToCart: product => {
        if (!get().isInCart(product.id)) {
          set(state => ({
            cart: [...state.cart, product],
          }));
        }
      },
      removeFromCart: id => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== id),
        }));
      },
      isInCart: id => get().cart.some(item => item.id === id),

      addToFavorites: product => {
        if (!get().isInFavorites(product.id)) {
          set(state => ({
            favorites: [...state.favorites, product],
          }));
        }
      },
      removeFromFavorites: id => {
        set(state => ({
          favorites: state.favorites.filter(item => item.id !== id),
        }));
      },
      isInFavorites: id => get().favorites.some(item => item.id === id),
    }),
    {
      name: 'cart-and-favorites',
    },
  ),
);
