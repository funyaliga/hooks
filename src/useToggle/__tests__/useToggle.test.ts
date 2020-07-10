import { renderHook, act } from '@testing-library/react-hooks';

import { useToggle } from '../../index';

describe('useToggle.test', () => {
  it('defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('init', async () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
    expect(result.current[1]).toBeInstanceOf(Function);
  });
  
  it('normal toggle', async () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1](true);
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1](false);
    });
    expect(result.current[0]).toBe(false);
  });

  it('change options', async () => {
    const { result } = renderHook(() => useToggle('off', 'on'));
    expect(result.current[0]).toBe('off');

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe('on');

    act(() => {
      result.current[1]('off');
    });
    expect(result.current[0]).toBe('off');

    act(() => {
      result.current[1]('on');
    });
    expect(result.current[0]).toBe('on');
  });

});