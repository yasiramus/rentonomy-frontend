import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useProperities() {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/properties`,
    fetcher
  );

  return {
    properties: data,
    isLoading,
    isError: error,
  };
}
