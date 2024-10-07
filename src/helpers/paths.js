import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const getPaths = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  
  return {
    __filename,
    __dirname
  }
}