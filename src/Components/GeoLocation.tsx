import { MouseEvent, useEffect, useState } from "react";
import Button from "./Atoms/Button";

interface myLocation {
  lat: number;
  long: number;
}

function GeoLocation() {
  const [location, setLocation] = useState<myLocation>();
  const [isMyLocationDetectConfirmed, setIsMyLocationDetectConfirmed] =
    useState("");

  const onGetMyCurrentLocation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMyLocationDetectConfirmed("customLocation");
  };
  const onGetDefaultLocation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMyLocationDetectConfirmed("defaultLocation");
  };

  const success = (pos: GeolocationPosition) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    setLocation({ lat: lat, long: long });
  };

  const error = () => {
    setLocation({ lat: 37, long: 100 });
    alert("으악! 에러가 났어요!!!");
    return;
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (isMyLocationDetectConfirmed === "customLocation") {
      geolocation.getCurrentPosition(success, error);
      localStorage.setItem("location", JSON.stringify(location));
    } else {
      localStorage.setItem("location", JSON.stringify(location));
    }
  }, [isMyLocationDetectConfirmed, location]);

  return (
    <>
      <div>위치 정보 받아올꺼야?</div>
      <Button onClick={onGetMyCurrentLocation}>어</Button>
      <Button onClick={onGetDefaultLocation}>ㄴ</Button>
    </>
  );
}

export default GeoLocation;
