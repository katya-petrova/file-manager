import * as url from 'url';

export const getFileDir = (metaUrl) => {
  return {
    __filename: url.fileURLToPath(metaUrl),
    __dirname: url.fileURLToPath(new URL('.', metaUrl)),
  };
};
