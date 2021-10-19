import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/hot-onion-resturent/main/doctorService.json"
    )
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return { serviceData };
};

export default useServices;
