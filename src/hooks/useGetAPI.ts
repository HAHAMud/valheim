import axios from 'axios';
import { useQuery } from 'react-query';

const useGetAPI = (url: string) => {
  const { data, isLoading, error } = useQuery(url, () => axios.get(url).then((res) => res.data));
  return { data, isLoading, error };
};

export default useGetAPI;
