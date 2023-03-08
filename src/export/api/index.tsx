import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://openmarket.weniv.co.kr/";

type AxiosProps = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  config?: AxiosRequestConfig;
  body?: {
    username?: string;
  };
};

export const useAxios = (params: AxiosProps) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      const res = await axios.request(params);
      setData(res.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading, fetchData } as const;
};
