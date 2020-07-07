import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from '../../index';

const getHook = () => renderHook(({ count }) => usePrevious(count), { initialProps: { count: 0 } });


describe('useScrip.test', () => {
  it('defined', () => {
    expect(usePrevious).toBeDefined();
  });
  it('init', () => {
    const hook = getHook();
    hook.rerender({ count: 1 });
    expect(hook.result.current).toBe(0);

    hook.rerender({ count: 3 });
    expect(hook.result.current).toBe(1);

    hook.rerender({ count: 10 });
    expect(hook.result.current).toBe(3);
  });
})