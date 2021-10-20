import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/hot-onion-resturent/main/doctorService.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setServiceData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return { serviceData };
};

export default useServices;
