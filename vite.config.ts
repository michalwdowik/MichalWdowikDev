import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { compression } from 'vite-plugin-compression2'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
    plugins: [
        react(),
        VitePWA({
            strategies: 'generateSW',
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css}'],
                navigateFallback: null,
            },
            devOptions: {
                enabled: true,
                type: 'module',
                navigateFallback: 'index.html',
            },

            manifest: {
                id: '/',
                start_url: './',
                name: 'Michał Wdowik Dev',
                short_name: 'Michał Wdowik Dev',
                theme_color: '#000000',
                icons: [
                    {
                        src: '/favicon.svg',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        compression({
            include: [/\.(js|mjs|json|css|html)$/],
            exclude: [/\.(br)$/, /\.(gz)$/],
            algorithm: 'brotliCompress',
        }),
    ],
})
