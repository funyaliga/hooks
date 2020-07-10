import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react'
import useScript, { statusEnum } from '../useScript';

const url = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'

afterEach(() => {
  document.querySelectorAll('script').forEach(script => {
    script.remove()
  })
})

describe('useScrip.test', () => {
  it('defined', () => {
    expect(useScript).toBeDefined();
  });
  it('load', () => {
    const { result, rerender } = renderHook(() => useScript(url))
    let script = document.querySelector(`script[src="${url}"]`)
    expect(script).toBeDefined()

    expect(result.current[0]).toBe(false)
    expect(result.current[1]).toBe(statusEnum.LOADING)

    act(() => {
      fireEvent(script, new Event('load'))
    })
    rerender()
    expect(script.getAttribute('data-status')).toEqual(statusEnum.READY)
    expect(result.current[0]).toBe(true)
    expect(result.current[1]).toBe(statusEnum.READY)
  });

  it('set attributes', () => {
    const { rerender } = renderHook(() => useScript(url, {
      async: true,
      'data-test': 'test'
    }))
    let script = document.querySelector(`script[src="${url}"]`)
    act(() => {
      fireEvent(script, new Event('load'))
    })
    rerender()
    expect(script.getAttribute('async')).toEqual('true')
    expect(script.getAttribute('data-test')).toEqual('test')
  });

  it('only once', () => {
    renderHook(() => useScript(url))
    renderHook(() => useScript(url))
    renderHook(() => useScript(url))
  
    let scripts = document.querySelectorAll(`script[src="${url}"]`)
    expect(scripts).toHaveLength(1)
  })
})