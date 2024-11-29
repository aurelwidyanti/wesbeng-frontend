import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Wesbeng",
    short_name:"wesbeng",
    description:"Aplikasi bank sampah digital",
    icons:[{
      src: '/wesbeng.svg',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/wesbeng.svg',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/wesbeng.svg',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/wesbeng.svg',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#fff',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
