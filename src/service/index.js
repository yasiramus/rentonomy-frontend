import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useProperties(path) {
  console.log(path, "path");

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_PROPERTIES_API_URL}/${path}`,
    fetcher
  );

  return {
    properties: data,
    isLoading,
    isError: error,
  };
}
