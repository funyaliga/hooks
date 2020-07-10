import { renderHook } from '@testing-library/react-hooks';

import { useTimeInterval } from '../../index';

jest.useFakeTimers();

afterEach(() => {
  jest.clearAllTimers();
});

describe('useTimeInterval.test', () => {
  it('defined', () => {
    expect(useTimeInterval).toBeDefined();
  });
  it('init', () => {
    const callback = jest.fn();
    renderHook(() => useTimeInterval(callback, 1000));
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(5);
  });
  it('`delay` of `null`', () => {
    const callback = jest.fn();
    renderHook(() => useTimeInterval(callback, null));
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('new `callback`', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    let handler = callback1;
    const { rerender } = renderHook(() => useTimeInterval(handler, 1000));
    jest.advanceTimersByTime(500);
    handler = callback2;
    rerender();
    jest.advanceTimersByTime(500);
    expect(callback1).toHaveBeenCalledTimes(0);
    expect(callback2).toHaveBeenCalledTimes(1);
  });
  it('new `delay`', () => {
    const callback = jest.fn();
    let delay = 1000;
    const { rerender } = renderHook(() => useTimeInterval(callback, delay));

    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    delay = 2000;

    rerender();
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('clear interval on unmount', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useTimeInterval(callback, 1000));

    jest.advanceTimersByTime(1000);
    unmount();
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(1);
  });
})