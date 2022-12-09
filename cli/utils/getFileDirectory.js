import { stat } from 'fs/promises';
import * as url from 'url';

export const getFileDir = (metaUrl) => {
  return {
    __filename: url.fileURLToPath(metaUrl),
    __dirname: url.fileURLToPath(new URL('.', metaUrl)),
  };
};

export const exists = async (path) => !!(await stat(path).catch(() => false));
