import { renderHook, act } from '@testing-library/react-hooks';

import { useStorage } from '../../index';

class LocalStorageMock {
  public store: {
    [key: string]: string
  }
  constructor() {
    this.store = {}
  }

  public clear() {
    this.store = {}
  }

  public getItem(key: string) {
    return this.store[key]
  }

  public setItem(key: string, value: string) {
    this.store[key] = value.toString()
  }

  public removeItem(key: string) {
    delete this.store[key]
  }
};

(global as any).localStorage = new LocalStorageMock()

describe('useStorage.test', () => {
  it('defined', () => {
    expect(useStorage).toBeDefined();
  });

  it('init', () => {
    const { result } = renderHook(() => useStorage(localStorage, 'init', 'value1'));
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

  it('initialValue is function', () => {
    const { result } = renderHook(() => useStorage(localStorage, 'init', () => 'value1'));
    expect(result.current[0]).toBe('value1');
  });


});