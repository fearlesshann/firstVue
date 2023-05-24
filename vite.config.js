import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prismjs from 'vite-plugin-prismjs';
import requireTransform from 'vite-plugin-require-transform';
import vitePluginRequire from "vite-plugin-require";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    prismjs({
      languages: ['json'],
    }),
    requireTransform({
      fileRegex:/ js$| jsx$| vue$| /
    }),
    vitePluginRequire({
			// @fileRegex RegExp
			// optional：default file processing rules are as follows
			fileRegex:/(.jsx?|.tsx?|.vue)$/
		}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit:1500,
    // rollupOptions: {
    //     output:{
    //         manualChunks(id) {
    //           if (id.includes('node_modules')) {
                
    //               return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //           }
    //       }
    //     }
    // }
  }
})
