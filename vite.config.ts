import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
// import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: '/'
  },
  build: {
    outDir: 'build',
    minify: 'esbuild',
    // cssCodeSplit: true
  },
  optimizeDeps: {
    include: ['antd', 'lodash',],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  
  plugins: [react(), tsconfigPaths(),  
  //   vitePluginImp({
  //   libList: [
  //     {
  //       libName: 'lodash',
  //       libDirectory: '',
  //       camel2DashComponentName: false
  //     },
  //     {
  //       libName: 'antd',
  //       style(name) {
  //         // use less
  //         return `antd/es/${name}/style/index.js`
  //       }
  //     },
  //   ]
  // })
],
})
