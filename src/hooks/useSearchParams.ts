import { useMemo, useCallback } from 'react';

export function useSearchParams() {
  const search = window.location.search;

  const params = useMemo(() => new URLSearchParams(search), [search]);

  const setSearchParams = useCallback((newParams: Record<string, string>) => {
    const newSearch = new URLSearchParams(newParams).toString();
    const newUrl = `${window.location.pathname}?${newSearch}`;
    window.history.replaceState({}, '', newUrl);
  }, []);

  return [params, setSearchParams] as const;
}