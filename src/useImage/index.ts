import { useState, useEffect } from 'react';

export const useImage = (src: string, crossOrigin: string = '') => {
  const [img, setImg] = useState<HTMLImageElement | undefined>(undefined);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (src) {
      const image = new Image();

      const onload = () => {
        setImg(image);
        setStatus('loaded')
      };

      const onerror = () => {
        setImg(undefined);
        setStatus('error')
      };

      image.addEventListener('load', onload);
      image.addEventListener('error', onerror);

      if (crossOrigin) {
        image.crossOrigin = crossOrigin
      }
      image.src = src;

      return () => {
        image.removeEventListener('load', onload);
        image.removeEventListener('error', onerror);
      };
    }

    return;
  }, [src]);

  return [img, status];
}