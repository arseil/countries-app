'use client';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem() {
    return Promise.resolve(null);
  },
  removeItem() {
    return Promise.resolve(null);
  },
});

export const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();
