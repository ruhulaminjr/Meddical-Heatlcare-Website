import { useEffect, useState } from "react";

const useDoctor = () => {
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/hot-onion-resturent/main/doctorData.json"
    )
      .then((res) => res.json())
      .then((data) => setDoctorData(data));
  }, []);
  return { doctorData };
};

export default useDoctor;
