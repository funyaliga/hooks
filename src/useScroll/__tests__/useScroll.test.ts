import { renderHook } from '@testing-library/react-hooks';
import { useScroll } from '../../index';

describe('useScroll', () => {
  it('defined', () => {
    expect(useScroll).toBeDefined();
  });
  it('document body', () => {
    const hook = renderHook(() => useScroll(document.body));
    expect(hook.result.current.x).toBe(0);
    expect(hook.result.current.y).toBe(0);
  });
});