import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 "@" 指向 "src" 目录
    }
  },
  base: './', // 设置打包目录
  server: {
    port: 3000, // 设置端口号
    open: true, // 启动服务，是否自动打开浏览器
    cors: true, // 是否允许跨域

    // 请求代理， 根据项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://xxx.com:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/') // 接口重写
      }
    }
  }
})
