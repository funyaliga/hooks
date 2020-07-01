import { renderHook } from '@testing-library/react-hooks';

import { useImage } from '../../index';

describe('useFavicon', () => {
  it('defined', () => {
    expect(useImage).toBeDefined();
  });

  it('run', async () => {
    const { result } = renderHook(() => useImage('https://via.placeholder.com/150'));
    const [, status] = result.current;

    expect(status).toBe('loading');
  });
});