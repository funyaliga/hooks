import { useState, useEffect, useRef } from 'react';

export enum statusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  READY = 'ready',
  ERROR = 'error',
}
interface Attrs {
  [propName: string]: any;
}

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const useScript = (
  src: HTMLScriptElement['src'],
  attrs: Attrs = {},
) => {
  const [status, setStatus] = useState(() => src ? statusEnum.LOADING : statusEnum.IDLE);

  const setAttrs = useRef<Function>();
  setAttrs.current = (scriptEl: HTMLScriptElement | null) => {
    for (const attr in attrs) {
      if ({}.hasOwnProperty.call(attrs, attr)) {
        scriptEl.setAttribute(attr, attrs[attr]);
      }
    }
  }
  
  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    if (!src) {
      setStatus(statusEnum.IDLE)
      return
    }
    let scriptEl: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`)

    if (!scriptEl|| (scriptEl && scriptEl.getAttribute('data-status') === statusEnum.ERROR)) {
      scriptEl = document.createElement('script');
      scriptEl.setAttribute('src', src);
      scriptEl.async = true;
      scriptEl.setAttribute('data-status', statusEnum.LOADING);
      setAttrs.current(scriptEl);
      document.body.appendChild(scriptEl);
    }

    if (scriptEl.hasAttribute('data-status')) {
      setStatus(scriptEl.getAttribute('data-status') as statusEnum);
    }

    const onLoad = () => {
      setStatus(statusEnum.READY)
      scriptEl.setAttribute('data-status', statusEnum.READY);
    };
    const onError = (error: ErrorEvent) => {
      setStatus(statusEnum.ERROR);
      scriptEl.setAttribute('data-status', statusEnum.ERROR);
    };

    scriptEl.addEventListener('load', onLoad);
    scriptEl.addEventListener('error', onError);

    return () => {
      scriptEl.removeEventListener('load', onLoad);
      scriptEl.removeEventListener('error', onError);
    };

  }, [src]);

  return [status === statusEnum.READY, status]

}

export default useScript;