import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-photo-plugin',
        configureServer(server) {
          server.middlewares.use('/api/save-photo', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const { image } = JSON.parse(body);
                  if (image && typeof image === 'string' && image.includes('base64,')) {
                    const base64Data = image.split(';base64,').pop();
                    if (base64Data) {
                      const buffer = Buffer.from(base64Data, 'base64');
                      fs.writeFileSync(
                        path.resolve(__dirname, 'src/assets/images/sidra_original_photo_1789211515793.jpg'),
                        buffer
                      );
                      fs.writeFileSync(
                        path.resolve(__dirname, 'public/assets/images/sidra_portrait.jpg'),
                        buffer
                      );
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true }));
                      return;
                    }
                  }
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Invalid image data' }));
                } catch (err: any) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: err.message }));
                }
              });
            } else {
              res.writeHead(405);
              res.end();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
