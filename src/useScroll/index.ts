import { useState, useEffect, MutableRefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

type Target = HTMLElement | MutableRefObject<HTMLElement> | Document | Window;
type Element = HTMLElement | Document | Window;

const getElement = (
  target?: Target,
  defaultElement?: Element
): Element | undefined  => {
  if (!target) {
    return defaultElement;
  }

  let element: Element;

  if ('current' in target) {
    element = target.current;
  } else {
    element = target;
  }

  return element;
}

export const useScroll = (
  target: Target
) => {
  const [position, setPosition] = useState<Position>({
    x: NaN,
    y: NaN,
  });

  useEffect(() => {
    const el = getElement(target, document);
    if (!el) return;

    function updatePosition(currentTarget: Element) {
      let newPosition: Position;
      if (currentTarget === document) {
        if (!document.scrollingElement) return;
        newPosition = {
          x: document.scrollingElement.scrollLeft,
          y: document.scrollingElement.scrollTop,
        };
      } else {
        newPosition = {
          x: (currentTarget as HTMLElement).scrollLeft,
          y: (currentTarget as HTMLElement).scrollTop,
        };
      }
      setPosition(newPosition);
    }
    updatePosition(el as Element);

    function listener(event: Event) {
      if (!event.target) return;
      updatePosition(event.target as Element);
    }

    el.addEventListener('scroll', listener, {
      capture: false,
      passive: true,
    });

    return () => {
      if (el) {
        el.removeEventListener('scroll', listener);
      }
    };
  }, [target])

  return position;
}