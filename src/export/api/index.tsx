import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://openmarket.weniv.co.kr/";

type AxiosProps = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  isUpdated?: boolean;
  data?: any;
  config?: AxiosRequestConfig;
};

export const useAxios = (params: AxiosProps) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      if (params.method === "get" || params.method === "delete") {
        const res = await axios.request(params);
        setData(res.data);
      } else {
        if (!params.isUpdated) return;
        const res = await axios[params.method](params.url, params.data);
        setData(res.data);
      }
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
