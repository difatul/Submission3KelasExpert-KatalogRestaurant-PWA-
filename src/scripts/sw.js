import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

// import { Workbox } from 'workbox-window';

// const swRegister = async () => {
//   if (!('serviceWorker' in navigator)) {
//     console.log('Service Worker not supported in the browser');
//     return;
//   }

//   const wb = new Workbox('./sw.bundle.js');

//   try {
//     await wb.register();
//     console.log('Service worker registered');
//   } catch (error) {
//     console.log('Failed to register service worker', error);
//   }
// };

// export default swRegister;
