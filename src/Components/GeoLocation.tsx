import { useGetWeather } from "api/weatherAPI";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Button from "./Atoms/Button";

type Props = {
  setLocationSubmit: Dispatch<SetStateAction<boolean>>;
};
interface myLocation {
  lat: number;
  long: number;
}

function GeoLocation({ setLocationSubmit }: Props) {
  const [location, setLocation] = useState<myLocation>({
    lat: 0,
    long: 0,
  });

  const data = useGetWeather(location);
  const [isMyLocationDetectConfirmed, setIsMyLocationDetectConfirmed] =
    useState("");

  const onGetMyCurrentLocation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMyLocationDetectConfirmed("customLocation");
    setLocationSubmit(true);
  };
  const onGetDefaultLocation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMyLocationDetectConfirmed("defaultLocation");
    setLocationSubmit(true);
  };

  const success = (pos: GeolocationPosition) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    setLocation({ lat: lat, long: long });
  };

  const error = () => {
    setLocation({ lat: 30, long: 100 });
    alert("으악! 에러가 났어요!!!");
    return;
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!!location.lat && !!location.long) return;

    if (isMyLocationDetectConfirmed === "customLocation") {
      geolocation.getCurrentPosition(success, error);
      localStorage.setItem("location", JSON.stringify(location));
    } else {
      localStorage.setItem("location", JSON.stringify({ lat: 30, long: 127 }));
    }
  }, [isMyLocationDetectConfirmed, location]);

  // useEffect(() => {
  //   if (!location) return;
  // }, [location]);

  return (
    <>
      <div>위치 정보 받아올꺼야?</div>
      <Button onClick={onGetMyCurrentLocation}>어</Button>
      <Button onClick={onGetDefaultLocation}>ㄴ</Button>

      {data &&
        data.map(
          (e) =>
            e.category === ("TMP" || "SKY") && (
              <>
                <div>{e.category}</div>
                <div>{e.fcstValue}</div>
              </>
            )
        )}
    </>
  );
}

export default GeoLocation;
