import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv("mock", process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    define: processEnvValues,
    server: {
      port: 5000, // optional, defaults to 5173
      // https is gone 🎉
    },
  };
});


/*
    define: processEnvValues,
    server: {
      port: 5000,
      https: {
        key: fs.readFileSync(`${processEnvValues['process.env'].CERT_KEY}`),
        cert: fs.readFileSync(`${processEnvValues['process.env'].CERT}`),
      }
    } */