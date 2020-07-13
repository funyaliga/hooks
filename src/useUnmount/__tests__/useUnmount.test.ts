
import { renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../../index';

describe('useUnmount', () => {
  it('defined', () => {
    expect(useUnmount).toBeDefined();
  });
  it('test unmount', async () => {
    const fn = jest.fn();
    const hook = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);

    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });
});