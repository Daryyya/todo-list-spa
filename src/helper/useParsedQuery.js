import { useSearchParams } from 'react-router-dom';

/**
 * @example:
 * const [value1, value2] = useParsedQuery(['param1', 'param2]);
 * */
const useParsedQuery = (keys) => {
  const [searchParams] = useSearchParams();
  return keys.map((key) => searchParams.get(key) || '');
};

export default useParsedQuery;