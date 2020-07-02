import { renderHook } from '@testing-library/react-hooks';

import { useImage } from '../../index';

describe('useFavicon', () => {
  it('defined', () => {
    expect(useImage).toBeDefined();
  });

  it('run', async () => {
    const { result } = renderHook(() => useImage('https://wxt.sinaimg.cn/mw1024/62194d50ly1g8ayqntoqpj207i0a0750.jpg?tags=%5B%5D'));
    const [, status] = result.current;

    expect(status).toBe('loading');
  });
});