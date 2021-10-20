import { useEffect, useState } from "react";

const useDoctor = () => {
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/hot-onion-resturent/main/doctorData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setDoctorData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return { doctorData };
};

export default useDoctor;
