// vite.config.js

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src/',
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
        guide: path.resolve(__dirname, 'src/pages/guide/guide.html'),
        videos: path.resolve(__dirname, 'src/pages/videos/videos.html'),
        play: path.resolve(__dirname, 'src/pages/play/play.html'),
        comments: path.resolve(__dirname, 'src/pages/comments/comments.html'),
        contact: path.resolve(__dirname, 'src/pages/contact/contact.html'),
      },
      
    },
    outDir: 'dist'
  }
});
