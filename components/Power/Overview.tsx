import { useEffect, useState } from "react";
import useSWR from "swr";

export default function PowerOverview() {
  const [power, setPower] = useState({
    production: 0,
    consumption: 0,
  });
  const { data, error } = useSWR(
    "http://127.0.0.1:8080/getPower",
    (url) => fetch(url).then((r) => r.json()),
    {
      refreshInterval: 1000,
    }
  );

  useEffect(() => {
    if (data) {
      let newPower = {
        production: 0,
        consumption: 0,
      };

      for (let circuit of data) {
        newPower.production += circuit.PowerCapacity;
        newPower.consumption += circuit.PowerConsumed;
      }

      setPower(newPower);
    }
  }, [data]);

  return (
    <div className="text-white font-bold hidden md:block">
      <div className="text-sm">Overall Power:</div>
      <div className="relative overflow-clip rounded-md h-10 bg-red-500 w-64 p-4">
        <div
          className="absolute left-0 top-0 h-full bg-green-500 z-0 flex items-center p-4 transition-all ease-in-out duration-300"
          style={{
            width: `${
              (power.production / (power.consumption + power.production)) * 100
            }%`,
          }}
        >
          {power.production}
        </div>
        <div className="float-right relative z-10 flex items-center h-full">
          {power.consumption}
        </div>
      </div>
    </div>
  );
}
