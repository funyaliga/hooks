import { renderHook, act } from '@testing-library/react-hooks';

import { useLocalStorage } from '../../index';

describe('useLocalStorage.test', () => {
  it('defined', () => {
    expect(useLocalStorage).toBeDefined();
  });

  it('init', () => {
    const { result } = renderHook(() => useLocalStorage('init', 'value1'));
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