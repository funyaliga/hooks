import { renderHook, act } from '@testing-library/react-hooks';

import { useSessionStorage } from '../../index';

describe('useSessionStorage.test', () => {
  it('defined', () => {
    expect(useSessionStorage).toBeDefined();
  });

  it('init', () => {
    const { result } = renderHook(() => useSessionStorage('init', 'value1'));
    expect(result.current[0]).toBe('value1');

    act(() => {
      result.current[1]('value2');
    });
    expect(result.current[0]).toBe('value2');

    act(() => {
      result.current[1](undefined);
    });
    expect(result.current[0]).toBeUndefined();
  });

});