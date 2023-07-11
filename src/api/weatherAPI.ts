import axios from "axios";
import { useQuery } from "react-query";

type ResponseType = {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: "JSON";
      items: {
        item: {
          baseDate: string;
          baseTime: string;
          category: string;
          fcstDate: string;
          fcstTime: string;
          fcstValue: string;
          nx: number;
          ny: number;
        }[];
      };
      pageNo: number;
      numOfRows: number;
      totalCount: number;
    };
  };
};

const getWeather = ({ lat, long }: { lat: number; long: number }) => {
  const response = axios.get<ResponseType>(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=4zRpacCNHt6p8hFytVyzh7zl%2BlUhKjVVoSC%2BUnGE1H%2FDo4PeFdLPYqasc8tzhkLn6Bg0xIm%2FAcpqa1nL6Pqrfw%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20230706&base_time=0500&nx=${lat}&ny=${long}`
  );
  return response;
};

export const useGetWeather = ({ lat, long }: { lat: number; long: number }) => {
  const response = useQuery({
    queryKey: ["weather", { lat, long }],
    queryFn: async () => await getWeather({ lat, long }),
    enabled: !!lat && !!long,
  });

  return response.data?.data?.response?.body?.items?.item ?? [];
};
