import { renderHook, act } from '@testing-library/react-hooks';

import { useCookie } from '../../index';


describe('useCookie.test', () => {
  it('defined', () => {
    expect(useCookie).toBeDefined();
  });

  it('init', () => {
    const { result } = renderHook(() => useCookie('init', 'value1'));
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