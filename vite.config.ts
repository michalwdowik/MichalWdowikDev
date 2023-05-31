import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
    plugins: [
        react(),
        compression({
            include: [/\.(js|mjs|json|css|html)$/],
            exclude: [/\.(br)$/, /\.(gz)$/],
            algorithm: 'brotliCompress',
        }),
    ],
})
